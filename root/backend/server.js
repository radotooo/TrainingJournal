const express = require('express')
const app = express()

const axios = require("axios");
const cheerio = require("cheerio");

let text;

axios.get("https://comptrain.co/wod/")
    .then(res => {

        const $ = cheerio.load(res.data);
        text = $(".wod-info > div>div:first-child")

    })


app.get('/', function (req, res) {
    res.send(text.html())
})

app.listen(3000)