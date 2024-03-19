const express = require('express')
const app = express()      
const env = require('dotenv')
env.config()         
app.use(express.json())
app.use(express.static(__dirname+"/public"));  //use this to use css files insie templates 

const get_chat = require('./routes/get_chat')

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/index.html')              
})

app.use('/api', get_chat)




module.exports = app;