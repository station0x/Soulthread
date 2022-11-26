"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');
const host = process.env.HOST

function isGuildOwned(guilds, guildId) {
 return Object.keys(guilds).includes(guildId)
}

module.exports = async (req, res) => {
  console.log('===============')
  let { modId, guildId, roleId, criteria } = req.query
  criteria = JSON.parse(criteria)
  console.log(modId, typeof guildId, roleId, criteria)
  if(!modId) throw new Error('User id not provided')
  const client = await clientPromise;
  const db = client.db()
  const Mods = db.collection("moderators")
  const Criteria = db.collection("criteriaEntries")
  const ModDoc = (await Mods.find({id: modId}).limit(1).toArray())[0]
  if(!ModDoc) {
    throw new Error('Mod is not registered')
  }
  const guildDoc = (await Criteria.find({_id: guildId}).limit(1).toArray())[0]
  if(!isGuildOwned(ModDoc.servers, guildId)) throw new Error('Guild not owned by this Mod')
  if(!guildDoc) {
    try {
      await Criteria.insertOne({
        _id: guildId,
        criteria: {
          [`${roleId}`]: criteria
        }
      })
      res.status(200).json({ success: true })
    } catch(err) {
      console.log(err)
      throw new Error(err)
    }
  } else {
    if(Object.keys(guildDoc.criteria).includes(roleId)) throw new Error ('Role criteria already exists')
    let newGuildDoc = {...guildDoc}
    guildDoc.criteria[`${roleId}`] = criteria
    console.log(guildDoc)
    await Criteria.updateOne({_id: guildDoc._id}, {
      $set:newGuildDoc
    })
    res.status(200).json({ success: true })
  }
}