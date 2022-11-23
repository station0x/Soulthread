"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');

// function validate(id) {
//     if(!id) throw new Error('User id not provided')
//     return true
// }

module.exports = async (req, res) => {
    const id = req.query.id
    console.log(id)
    if(!id) throw new Error('User id not provided')
    const client = await clientPromise;
    console.log(client)
    const db = client.db()
    const Mods = db.collection("moderators")
    const ModDoc = (await Mods.find({id}).limit(1).toArray())[0]
    const success = ModDoc === undefined ? false : true
    res.status(200).json({ success });
}