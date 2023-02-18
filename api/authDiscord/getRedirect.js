"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');
const axios = require('axios')
const url = require("url")
const codec = require('json-url')('lzw')

const host = process.env.HOST

module.exports = async (req, res) => {
  console.log(req.query.code, process.env.DISCORD_CLIENT_ID, process.env.DISCORD_CLIENT_SECRET, host)
  const { code } = req.query
  if(code) {
    const client = await clientPromise;
    const db = client.db()
    const Mods = db.collection("moderators")

    try {
      console.log('redirected......................')
      const formData = new url.URLSearchParams({
        client_id: process.env.DISCORD_CLIENT_ID,
        client_secret: process.env.DISCORD_CLIENT_SECRET,
        grant_type: 'authorization_code',
        code: code.toString(),
        redirect_uri: `${host}/api/authDiscord/getRedirect`
      })
      const response = await axios.post("https://discord.com/api/v10/oauth2/token",
      formData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept-Encoding': 'gzip: false' // wow, if not present we recieve magical spells
        }
      })
      const { access_token, refresh_token } = response.data
      try {
        const userResponse = await axios.get("https://discord.com/api/v10/users/@me", {
          headers: {
            'Authorization': `Bearer ${access_token}`,
            'Accept-Encoding': 'gzip: false' // wow, if not present we recieve magical spells
          }
        })
        let { id, username, avatar } = userResponse.data
        if(!avatar) avatar = 'https://ia803204.us.archive.org/4/items/discordprofilepictures/discordblue.png' //default avatar
        let isRegistered = (await axios.get(`${host}/api/moderators/isRegistered`, {
          params: {
            id,
            username,
            avatar
          }
        })).data.success
        // returning user
        if(isRegistered) {
          // update user tokens
          const ModDoc = (await Mods.find({id}).limit(1).toArray())[0]
          // if(ModDoc.access_token !== access_token || ModDoc.refresh_token !== refresh_token) {
            await axios.get(`${host}/api/moderators/updateTokens`, {
              params: {
                id,
                access_token,
                refresh_token
              }
            })
          // }
          codec.compress({
            id,
            username,
            avatar,
            newUser: false
          }).then(userURL => {
            const redirectURL = url.format({
              host,
              pathname: '/welcome/' + userURL
            }).toString()
            res.redirect(redirectURL)
          })
          // res.status(200).json({ newUser: false, success: true, user: id, username, avatar })
        } else {
          // new user
          try {
            await axios.get(`${host}/api/moderators/registerMod`, {
              params: {
                id,
                username,
                avatar,
                access_token,
                refresh_token
              }
            })
            codec.compress({
              id,
              username,
              avatar,
              newUser: true
            }).then(userURL => {
              const redirectURL = url.format({
                host,
                pathname: '/welcome/' + userURL
              }).toString()
              res.redirect(redirectURL)
            })
            // res.status(200).json({ newUser: true, success: true, user: {id, username, avatar} });
          } catch(err) {
            console.log(err)
            throw new Error('Error occured during registration')
          }
        }
      } catch(err) {
        console.log(err)
        throw new Error(err)
      }
    } catch(err) {
      console.log(err)
      res.status(500)
      return true
    }
  } else {
    // console.log(res.data)
    res.status(200).json({success: true }) 
  }
  res.status(500)
}