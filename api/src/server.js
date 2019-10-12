const express = require('express')
const routes = require('./routes')

const server = express() //cria um servidor

server.use(express.json())

server.use(routes) //add modulo

server.listen(5000) //define a porta
