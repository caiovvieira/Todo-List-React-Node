const express = require('express')
const { Note } = require('../controllers/noteController')
const noteRoute = express.Router()

noteRoute.get('/note', Note.index)
noteRoute.post('/note', Note.store)
noteRoute.get('/note/:id', Note.show)
noteRoute.put('/note/:id', Note.update)
noteRoute.delete('/note/:id', Note.delete)


module.exports = noteRoute