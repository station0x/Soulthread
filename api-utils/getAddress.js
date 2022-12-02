import { ethers } from 'ethers'

module.exports = function(signature, guildName, username, timestamp, interactionId) {
    guildName = guildName.split('+').join(' ')
    username = username.split('+').join(' ')
    return ethers.utils.verifyMessage( `SoulThread (https://soulthread.xyz) requires verification of account ownership.\n\n Username: ${username} \n Server Name: ${guildName} \n Interaction ID: ${interactionId} \n Raw Timestamp: ${timestamp} \n\nThis Soul Bond (message) is READ-ONLY access and has NO GAS FEE associated with it. Please sign this Soul Bond (message) to verify with SoulThread`
    , ethers.utils.splitSignature(signature))
}