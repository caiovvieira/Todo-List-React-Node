import express from 'express'
import Auth from '../controllers/authController.js'

const authRoute = express.Router()

authRoute.post('/auth', Auth.login)
authRoute.post('/refreshToken', Auth.generateTokens)

export default authRoute