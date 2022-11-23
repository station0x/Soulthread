const axios = require('axios')
const url = require("url")

const host = process.env.HOST

module.exports = async (req, res) => {
  console.log(req.query.code, process.env.DISCORD_CLIENT_ID, process.env.DISCORD_CLIENT_SECRET, host)
  const { code } = req.query
  if(code) {
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
        const { id, username, avatar } = userResponse.data
        const isRegistered = await axios.get(`${host}/api/moderators/isRegistered`, {
          params: {
            id
          }
        })
        // console.log(isRegistered.response.data)
        res.status(200).json({res: userResponse.data})
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
    console.log(res.data)
    res.status(200).json({success: true }) 
  }
  res.status(500)
}