import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    refreshToken:{type:String},
    user_id:{type: mongoose.Schema.Types.ObjectId, ref:'users'}
})

const Token = mongoose.model("tokens", tokenSchema)

export default Token