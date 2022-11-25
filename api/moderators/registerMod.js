"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');
const host = process.env.HOST

module.exports = async (req, res) => {
  let { id, username, avatar, access_token, refresh_token } = req.query
  if(!id) throw new Error('User id not provided')
  const client = await clientPromise;
  const db = client.db()
  const Mods = db.collection("moderators")
  console.log(id, username, avatar)
  const ModDoc = (await Mods.find({id}).limit(1).toArray())[0]
  if(ModDoc) {
    throw new Error('User already registered')
  }
  username = username.split('+').join(' ')
  await Mods.insertOne({
    id,
    username,
    avatar,
    access_token,
    refresh_token
  })
  res.status(200).json({ success: true, id, username, avatar });
}