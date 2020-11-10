const express = require('express')
const dbConnet = require('./db')
const cors = require('cors')

const wodRoute = require('./routes/wod')
const homeRoute = require('./routes/home')

const app = express()
const PORT = process.env.PORT || 5000;

//connect Db
dbConnet();

//middleware
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));

//routes
app.use('/wod', wodRoute)
app.use('/', homeRoute)


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
}) 