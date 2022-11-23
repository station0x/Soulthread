"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');
const axios = require('axios')

const host = process.env.HOST

module.exports = async (req, res) => {
    const { id, username, avatar } = req.query
    if(!id) throw new Error('User id not provided')
    const client = await clientPromise;
    const db = client.db()
    const Mods = db.collection("moderators")
    const ModDoc = (await Mods.find({id}).limit(1).toArray())[0]
    const success = ModDoc === undefined ? false : true
    if(success) res.status(200).json({ success, id, username, avatar });
    else res.status(200).json({ success });
}