import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

function databaseConnect() {

    mongoose.connect(`${process.env.URL_DATABASE}`)

    const databaseConnection = mongoose.connection
    databaseConnection.on('error', () => { console.log("error database not connected") })
    databaseConnection.once('open', () => { console.log('database connected') })

}

export default databaseConnect






