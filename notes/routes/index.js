const express = require('express')
const { Note } = require('../controllers/index')
const route = express.Router()

route.get('/', Note.index)
route.post('/', Note.store)
route.get('/:id', Note.show)
route.put('/:id', Note.update)
route.delete('/:id', Note.delete)


module.exports = route