import express from "express"
import notesRoutes from './routes/notesRoutes.js'
import { connectDb } from "./config/db.js"
import dotenv from 'dotenv'
import rateLimiter from "./middleware/ratelimiter.js"
import cors from 'cors'
// const express = require('express')
dotenv.config();

const app = express()
const PORT = process.env.PORT

// Middleware



//middleware, have to use them before the routes
//Below middleware will parse JSON bodies: req.body
app.use(express.json())
app.use(rateLimiter)
app.use(cors())
//One simple middleware
// app.use ( (req, res, next) => {
//     console.log(`The next request is: ${req.method}, and request URL is: ${req.url}`)
// })
app.use("/api/notes", notesRoutes)
 app.listen(5001, () => {
    console.log('Server started at PORT:', PORT)})
connectDb()



//oA9SV0IyEV4dHQLM

//mongodb+srv://<db_username>:<db_password>@cluster0.s6miwue.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//biharbeyondborders ho0kvGoaQwVeJYLi
//mongodb+srv://biharbeyondborders:ho0kvGoaQwVeJYLi@cluster0.hi9dlnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0