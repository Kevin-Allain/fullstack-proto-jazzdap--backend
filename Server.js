const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
require('dotenv').config()

const routes = require('./routes/JazzDapRoute')

const app = express()
const PORT = process.env.port || 5000

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {console.log(`Connected to MongoDB`)})
    .catch((err) => {console.log(`Error: `,err)})

app.use(routes)

app.listen(PORT, () => console.log(`Listening on ${PORT}`))