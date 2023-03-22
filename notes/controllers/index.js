class Note {

    static notes = []

    static index(req, res) {
        return res.status(200).send(Note.notes)
    }

    static store(req, res) {
        const { title, text } = req.body

        Note.notes.push({ id: Note.generateID(), title, text })

        return res.status(200).json({ message: "NOTE CREATED" })
    }

    static show(req, res) {
        const { id } = req.params

        const getNote = Note.notes.find(note => note.id === id)

        return res.status(200).json(getNote)
    }

    static update(req, res) {
        const { id } = req.params
        const { title, text } = req.body

        const getNote = Note.notes.find(note => note.id === id)
        const findNote = Note.notes.findIndex(note => note.id === getNote.id)
        const updateNote = { ...getNote, title: title, text: text }

        Note.notes[findNote] = updateNote

        return res.status(200).json({ message: "NOTE UPDATED" })
    }

    static delete(req, res) {
        const { id } = req.params
        const findNote = Note.notes.findIndex(note => note.id === id)

        Note.notes.splice(findNote, 1)

        return res.status(200).json({ message: "NOTE DELETED" })
    }


    static generateID() {
        return Math.random().toString(32).substring(2)
    }

}

module.exports = { Note }

