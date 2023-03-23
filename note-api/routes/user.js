const express = require('express')
const { User } = require('../controllers/userController')
const userRoute = express.Router()

userRoute.get('/user', User.index)
userRoute.post('/user', User.store)


module.exports = userRoute