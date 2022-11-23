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
        redirect_uri: `${host}/api/moderators/registerMod`
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
      res.status(200).json({res: response.data})
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