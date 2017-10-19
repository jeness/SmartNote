const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const config = require('../config')

mongoose.connect(config.mongodb_url,{ useMongoClient: true })
let db = mongoose.connection

db.on('error', console.error.bind(console, 'Database connection failure, reason is:'));
db.once('open', function() {
  console.log(config.mongodb_url, 'Database connected successfully!');
})


module.exports = mongoose