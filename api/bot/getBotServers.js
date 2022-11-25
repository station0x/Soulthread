const axios = require('axios')
const url = require("url")
const clientPromise = require('../../api-utils/mongo-client');

const host = process.env.HOST

module.exports = async (req, res) => {
    const { id } = req.query
    if(!id) throw new Error('User id not provided')
    const client = await clientPromise;
    const db = client.db()
    const Mods = db.collection("moderators")
    const ModDoc = (await Mods.find({id}).limit(1).toArray())[0]
    const success = ModDoc === undefined ? false : true
    if(success) {
        try {
            const botServers = await axios.get("https://discord.com/api/v9/users/@me/guilds", {
                headers: {
                    'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                    'Accept-Encoding': 'gzip: false' 
                }
            })
            const userServers = await axios.get("https://discord.com/api/v9/users/@me/guilds", {
                headers: {
                    'Authorization': `Bearer ${ModDoc.access_token}`,
                    'Accept-Encoding': 'gzip: false' 
                }
            })

            const activeBotServers = botServers.data.map((e, index) => {
                let oldE = e.id
                let activeServer = userServers.data.map((e, index) => {
                    if(e.id === oldE) {
                        e.active = true
                    } else e.active = false
                    return e
                })
                return activeServer
            })
            console.log(activeBotServers)
            res.status(200).json({ servers: activeBotServers })


        } catch(err) {
            console.log(err)
            throw new Error('error occured')
        }
    } else throw new Error('user not found')
}