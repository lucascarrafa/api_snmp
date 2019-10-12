const express = require('express')
const routes = require('./routes')

const server = express() //cria um servidor

server.use(express.json())

server.use(routes) //add modulo

server.listen(3333) //define a porta
