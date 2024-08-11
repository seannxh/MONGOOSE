require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.DATA)

mongoose.connection.on('open', () => console.log("Connected")).on('close', () => console.log("Disconnected")).on('error', (err) => console.log('error', err))

module.exports = mongoose