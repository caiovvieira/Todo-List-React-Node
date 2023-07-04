import express from 'express'
import cors from 'cors'
import authRoute from './authRoute.js'
import userRoute from './userRoute.js'
import noteRoute from './noteRoute.js'
import authMiddleware from '../middlewares/authMiddleware.js'

function routes(app) {

    app.route('/').get((req,res)=>{
        res.status(200).json({message:'hello greeting'})
    })
    
    app.use(cors(), express.json())

    app.use(
        '/api', 
        userRoute, 
        authRoute
    )

    app.use('/api', authMiddleware, noteRoute)
}

export default routes
