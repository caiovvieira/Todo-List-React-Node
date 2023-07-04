import express from 'express'
import routes from './routes/index.js'
import databaseConnect from '../src/config/database.js'

databaseConnect()

const app = express()
routes(app)

export default app







