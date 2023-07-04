import express from 'express'
import UserController from '../controllers/userController.js'

const userRoute = express.Router()

userRoute.get('/user', UserController.index)
userRoute.post('/user', UserController.store)
userRoute.get('/user/:id', UserController.show)
userRoute.put('/user/:id', UserController.update)
userRoute.delete('/user/:id', UserController.delete)


export default userRoute