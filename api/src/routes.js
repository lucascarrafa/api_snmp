const express = require('express')

const routes = express.Router()

const SNMPSwitch = require('./controllers/SNMPSwitch')

routes.get('/nome',SNMPSwitch.nome)

module.exports = routes

