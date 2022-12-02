"use strict";
// Import the dependency.
const clientPromise = require('../../api-utils/mongo-client');
const getAddress = require('../../api-utils/getAddress');
const { ethers } = require("ethers");
const CONSTANTS = require("../../constants")
module.exports = async (req, res) => {
    let { 
        guildId,
        userId,
        // signing message
        guildName,
        interactionId,
        timestamp,
        username
    } = req.query
    const address = getAddress(req.query.signature, guildName, username, timestamp, interactionId)
    // if(address !== req.query.address) throw new Error('Signature not valid')
    if(!guildId || !userId) throw new Error('Parameter missing')
    const client = await clientPromise;
    const db = client.db()
    const Criteria = db.collection("criteriaEntries")
    const guildDoc = (await Criteria.find({_id: guildId}).limit(1).toArray())[0]
    // console.log(guildId)
    if(!guildDoc) throw new Error('Invalid Guild Id - Not found.')

    let rolesPassed = []
    const balances = Object.keys(guildDoc.criteria).map( async(roleId, index) => {
        let role = guildDoc.criteria[roleId]
        let criteriaChain = CONSTANTS.ENUM.chains[role.chainType]
        let criteriaStandard = CONSTANTS.ENUM.standards[role.tokenStandard]
        const provider = new ethers.providers.JsonRpcProvider(criteriaChain.rpcUrl);
        const assetContract = new ethers.Contract(role.contractAddress, [criteriaStandard.ABI.balanceOf], provider);
        const assetBalance = Number(ethers.utils.formatEther(await assetContract.balanceOf(address)))
        return {
            roleId,
            minAmount: role.minAmount,
            balance: await assetBalance
        }
        // console.log(assetBalance)
    })
    for await (const p of balances) {
        console.log(Number.parseInt(p.balance), p.minAmount, p.roleId)
        if(p.balance) {
            if(Number.parseInt(p.balance) >= p.minAmount) rolesPassed.push(p.roleId)
        }
    }

    let userHash = require('crypto').createHash('sha256').update(`${userId}${guildId}`).digest("hex")
    const verifiedMembers = db.collection("verifiedMembers")
    const userDoc = (await verifiedMembers.find({userHash}).limit(1).toArray())[0]
    console.log(userDoc)
    if(!userDoc) {
        await verifiedMembers.insertOne({
            userHash,
            userId,
            rolesPassed,
            timestamp: Date.now()
        })
    } else {
        let newRecord = {...userDoc}
        newRecord.rolesPassed = rolesPassed
        newRecord.timestamp = Date.now()
        await verifiedMembers.updateOne({userHash}, {
            $set:newRecord
        })
    }
    res.status(200).json({ success: true, rolesPassed })
}