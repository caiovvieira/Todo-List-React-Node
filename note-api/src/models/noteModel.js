import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    title:{type:String, required:true},
    text:{type:String, required:true},
})

const Note = mongoose.model('notes', noteSchema);

export default Note
