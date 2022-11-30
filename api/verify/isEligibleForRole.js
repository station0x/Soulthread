// Don't use yet. {{ WIP }}
"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');
const getAddress = require('../../api-utils/getAddress');
const host = process.env.HOST

module.exports = async (req, res) => {
    let { 
        guildId,
        roleId,
        userId,
        // signing message
        guildName,
        interactionId,
        timestamp,
        username
    } = req.query
    const address = getAddress(req.query.signature, guildName, username, timestamp, interactionId)
    console.log(req.query)
    if(address !== req.query.address) throw new Error('Signature not valid')
    if(!guildId || !roleId || !userId) throw new Error('Parameter missing')
    const client = await clientPromise;
    const db = client.db()
    const Criteria = db.collection("criteriaEntries")
    const guildDoc = (await Criteria.find({_id: guildId}).limit(1).toArray())[0]
    console.log(guildId)
    if(!guildDoc) throw new Error('Invalid Guild Id - Not found.')

    if(Object.keys(guildDoc.criteria).includes(roleId)) { 
        let criteria = guildDoc.criteria[`${roleId}`]
        console.log(criteria, address, req.query.address)
        res.status(200).json({ success: true })
    } else throw new Error("Role does not exist")
}