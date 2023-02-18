"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');
const host = process.env.HOST

module.exports = async (req, res) => {
  let { id, access_token, refresh_token } = req.query
  console.log(id, access_token, refresh_token)
  if(!id) throw new Error('User id not provided')
  const client = await clientPromise;
  const db = client.db()
  const Mods = db.collection("moderators")
  const ModDoc = (await Mods.find({id}).limit(1).toArray())[0]
  
  if(!ModDoc) {
    throw new Error('User not found')
  }
  let newModDoc = {...ModDoc}
  newModDoc.access_token = access_token
  newModDoc.refresh_token = refresh_token
  newModDoc.lastUpdated = new Date()

  try {
    await Mods.updateOne({id}, {
        $set: newModDoc
    })
  }
  catch (e) {
    console.log(e.data)
    throw new Error(e.data)
  }  
  res.status(200).json({ success: true, id, access_token, refresh_token});
}