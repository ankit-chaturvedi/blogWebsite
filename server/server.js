import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import router from './routes/routes.js'
import connectDB from "./config/mongoDB.config.js";

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())

app.use('/',router)
app.listen(3000,() =>{
    connectDB()
    console.log('Server started on port 3000')
})
