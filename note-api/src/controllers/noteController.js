import Note from '../models/noteModel.js'

class NoteController {

    static async index(req, res) {
        try {
            const notes = await Note.find()

            return res.status(200).json(notes)

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }


    static async store(req, res) {
        try {
            const { title, text } = req.body
            const newNote = new Note({ title, text })
            await newNote.save()

            return res.status(200).json(newNote)

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }


    static async show(req, res) {
        try {
            const { id } = req.params
            const getNote = await Note.findById(id)
            
            return res.status(200).json(getNote)
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
        
    }
    

    static async update(req, res) {
        try {
            const { id } = req.params
            const { title, text } = req.body
            const updateNote = await Note.findByIdAndUpdate(id, {title, text})
            
            return res.status(200).json({ message: "NOTE UPDATED" })
            
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
    

    static async delete(req, res) {
        try {
            const { id } = req.params
            const deleteNote = await Note.findByIdAndDelete(id)
            
            return res.status(200).json({ message: "NOTE DELETED" })

        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }
}

export default NoteController

