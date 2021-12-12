"use strict"
const express = require('express')
const mongoose = require('mongoose')
const morgon = require('morgan')
const server = require('./config/server')
const app = express() 
const port = server.port

// connect to db
mongoose.connect(server.dbUrl, {useNewUrlParser:true})
const conn = mongoose.connection
conn.on('open', () => {
    console.log('database connected...')
})

// middleware 
app.use(morgon('dev'))

// all routing
app.get('/', (req, res) => {
  res.send(server.appName)
})
app.use('/api/v1',require('./src/api_v1/routes'))

// listen server
app.listen(port, () => {
  console.log(`${server.appName} listening on port ${port}!`)
})