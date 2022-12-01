"use strict";
// Import the dependency.
const clientPromise = require('../api-utils/mongo-client');

module.exports = async (req, res) => {
    console.log('fired...')
    const { userHash } = req.query
    if(!userHash) throw new Error('User hash was not provided')
    const client = await clientPromise;
    const db = client.db()
    const verifiedMembers = db.collection("verifiedMembers")
    const userDoc = (await verifiedMembers.find({id: userHash}).limit(1).toArray())[0]
    if(userDoc) res.status(200).json({ rolesPassed: userDoc.rolesPassed });
    else res.status(200).json({ rolesPassed: null });
}