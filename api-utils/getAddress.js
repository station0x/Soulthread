import { ethers } from 'ethers'

module.exports = function(signature, guildName, username, timestamp, interactionId) {
    guildName = guildName.split('+').join(' ')
    username = username.split('+').join(' ')
    return ethers.utils.verifyMessage(`SoulThread (https://soulthread.xyz) asks you to sign this message for the purpose of verifying your account ownership. This is READ-ONLY access and will NOT trigger any blockchain transactions or incur any fees. \n\n- Community: ${guildName} \n- User: ${username} \n- Discord Interaction: ${interactionId} \n- Timestamp: ${timestamp} \n`
    , ethers.utils.splitSignature(signature))
}