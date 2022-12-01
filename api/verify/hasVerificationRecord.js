"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');

module.exports = async (req, res) => {
    const { userId } = req.query
    if(!userId) throw new Error('User id not provided')
    const client = await clientPromise;
    const db = client.db()
    const verifiedMembers = db.collection("verifiedMembers")
    const userDoc = (await verifiedMembers.find({userId}).limit(1).toArray())[0]
    userDoc ? res.status(200).json({ verified: true, record: userDoc }) : res.status(200).json({ verified: false })
}