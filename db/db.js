const mongoose = require('mongoose')
let gracefulShutdown
const dbURI = `mongodb://localhost:27017/twitter-integra`
const db = mongoose.connection

mongoose.connect(dbURI)

db.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI)
})

db.on('error', function (err) {
  console.log('Mongoose connection error: ' + err)
})

db.on('disconnected', function () {
  console.log('Mongoose disconnected')
})

require('./tweets.model')
