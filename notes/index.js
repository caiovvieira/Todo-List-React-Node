const express = require('express')
const route = require('./routes/index')
const app = express()
const mongoose = require('mongoose') 

app.use(express.json())


mongoose.connect('mongodb://localhost:27017/note').then(()=>{
    console.log('database logged');
})


app.use('/api', route)


app.listen(3000, ()=>{
    console.log('server is runninng');
})