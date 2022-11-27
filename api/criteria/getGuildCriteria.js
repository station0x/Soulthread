"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');
const host = process.env.HOST

module.exports = async (req, res) => {
    let { guildId} = req.query
    const client = await clientPromise;
    const db = client.db()
    const Criteria = db.collection("criteriaEntries")
    const guildDoc = (await Criteria.find({_id: guildId}).limit(1).toArray())[0]
    if(!guildDoc) {
        res.status(200).json({ success: true, guildCriteria: {} })
    } else {
        res.status(200).json({ success: true, guildCriteria: guildDoc.criteria })
    }
}