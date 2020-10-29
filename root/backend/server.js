const express = require('express')
const app = express()
const cors = require('cors')

const axios = require("axios");
const cheerio = require("cheerio");

const PORT = process.env.PORT || 5000;

//Middleware
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


app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
}) 