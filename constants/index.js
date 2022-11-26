const prod = require('./prod.json')
const dev = require('./dev.json')

const isProd = process.env.ENV === "prod"

module.exports = isProd ? prod : dev