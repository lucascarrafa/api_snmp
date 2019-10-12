const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const server = express() //cria um servidor

mongoose.connect('mongodb://localhost:27017/desafio', {useUnifiedTopology: true,  useNewUrlParser: true })

server.use(express.json())

server.use(routes) //add modulo

server.listen(5000) //define a porta
