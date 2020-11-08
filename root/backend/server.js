const express = require('express')
const app = express()
const cors = require('cors')
const wod = require('./Models/Wod')
const dbConnet = require('./db')

const axios = require("axios");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 5000;

//connect Db
dbConnet();

//Middleware
app.use(express.json())
app.use(cors({ origin: 'http://localhost:3000' }));

let text;

axios.get("https://comptrain.co/wod/")
    .then(res => {

        const $ = cheerio.load(res.data);
        text = $(".wod-info > div>div:first-child")
        console.log(text.text());
    })
app.get('/', function (req, res) {
    res.send(text.html())
})

app.get('/api', async (req, res) => {
    console.log(req.body);
    const ggd = req.body;
    const gffd = await wod.find(ggd);
    res.send(gffd)
})


app.post("/api", (req, res) => {
    const dbCard = req.body;
    console.log(req);
    wod.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
}) 