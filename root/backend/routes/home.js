
const axios = require("axios");
const cheerio = require("cheerio");
const express = require('express');


const router = express.Router();
let text;

axios.get("https://comptrain.co/wod/")
    .then(res => {

        const $ = cheerio.load(res.data);
        text = $(".wod-info > div>div:first-child")
    })

router.get('/', function (req, res) {
    res.send(text.html())
})

// router.get('/api', async (req, res) => {
//     console.log(req.body);
//     const ggd = req.body;
//     const gffd = await wod.find(ggd);
//     res.send(gffd)
// })


module.exports = router; 