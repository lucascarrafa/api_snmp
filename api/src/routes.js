const express = require('express')

const routes = express.Router()

const SNMPSwitch = require('./controllers/SNMPSwitch')

routes.get('/nome',SNMPSwitch.nome)
routes.get('/porta01',SNMPSwitch.porta01)
routes.get('/porta02',SNMPSwitch.porta02)

module.exports = routes

