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

// body parser and for getting json, url encoded, form data in request
var bodyParser = require('body-parser'),
    multer = require('multer')
app.use(bodyParser.json({limit: '5mb'})); // we need to pass Content-Type: application/json in header
app.use(multer().array()) //for getting form data, we don't need to pass anything specifically in header
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

// all routing
app.get('/', (req, res) => {
  res.send(server.appName)
})
app.use('/api/v1',require('./src/api_v1/routes'))

// listen server
app.listen(port,"0.0.0.0", () => {
  console.log(`${server.appName} listening on port ${port}!`)
})