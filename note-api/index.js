require('dotenv').config()
const express = require('express')
const noteRoute = require('./routes/note')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/user')
const authMiddleware = require('./middlewares/authMiddleware')
const app = express()

app.use(express.json())

app.use('/api', userRoute, authRoute)

app.use('/api', authMiddleware, noteRoute)

app.listen(process.env.PORT, () => {
    console.log('server is runninng');
})