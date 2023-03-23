const express = require('express')
const { Auth } = require('../controllers/authController')
const authRoute = express.Router()

authRoute.post('/auth', Auth.login)

module.exports = authRoute