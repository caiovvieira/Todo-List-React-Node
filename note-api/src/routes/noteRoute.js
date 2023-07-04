import express from 'express'
import NoteController from '../controllers/noteController.js'

const noteRoute = express.Router()

noteRoute.get('/note', NoteController.index)
noteRoute.post('/note', NoteController.store)
noteRoute.get('/note/:id', NoteController.show)
noteRoute.put('/note/:id', NoteController.update)
noteRoute.delete('/note/:id', NoteController.delete)


export default noteRoute