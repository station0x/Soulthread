const axios = require('axios')
const url = require("url")
const clientPromise = require('../../api-utils/mongo-client');

const host = process.env.HOST

module.exports = async (req, res) => {
    console.log('==================================================')
    const { id } = req.query
    if(!id) throw new Error('User id not provided')
    const client = await clientPromise;
    const db = client.db()
    const Mods = db.collection("moderators")
    const ModDoc = (await Mods.find({id}).limit(1).toArray())[0]
    const success = ModDoc === undefined ? false : true
    if(success) {
        let newModDoc = {...ModDoc}
        try {
            const botServers = await axios.get(`${process.env.DISCORD_API}/users/@me/guilds`, {
                headers: {
                    'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                    'Accept-Encoding': 'gzip: false' 
                }
            })
            console.log('==================================================')
            console.log(botServers.data)
            const userServers = await axios.get(`${process.env.DISCORD_API}/users/@me/guilds`, {
                headers: {
                    'Authorization': `Bearer ${ModDoc.access_token}`,
                    'Accept-Encoding': 'gzip: false' 
                }
            })
            // console.log(botServers, userServers)

            let botServersIds = botServers.data.map((e, i) => {
                return e.id
            })
            let activeBotServers = userServers.data.map((e, i) => {
                if(botServersIds.includes(e.id)) {
                    e.active = true
                } else {
                    e.active = false
                }
                return e
            })
            console.log('/////////////////////////////////////////////////////////////////////////////////////////////////////////')
            console.log(activeBotServers)

            let userActiveServers = {}
            activeBotServers.map((e, index) => {
                if(e.active) {
                    e.roles = []
                    userActiveServers[`${e.id}`] = e
                }
            })
            let roles = []
            for(server in userActiveServers) {
                try { 
                    userActiveServers[server].roles = (await axios.get(`${process.env.DISCORD_API}/guilds/${server}/roles`, {
                        headers: {
                            'Authorization': `Bot ${process.env.DISCORD_BOT_TOKEN}`,
                            'Accept-Encoding': 'gzip: false' 
                        }
                    })).data
                } catch(err) { console.log(err) }
                console.log(server)
            }
            console.log('#############################################################')
            console.log(userActiveServers)
            // console.log(userActiveServers)
            // console.log(Object.keys(userActiveServers).length)
            if(Object.keys(userActiveServers).length > 0) {
                newModDoc.servers = userActiveServers
            }
            // console.log(newModDoc)
            await Mods.updateOne({_id:newModDoc._id}, {
                $set:newModDoc
            })
            res.status(200).json({ servers: activeBotServers })
        } catch(err) {
            console.log(err)
            throw new Error('error occured')
        }
    } else throw new Error('user not found')
}