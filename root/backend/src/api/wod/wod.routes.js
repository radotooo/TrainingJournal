const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");

const router = express.Router();
let text;

axios.get("https://comptrain.co/wod/").then((res) => {
    const $ = cheerio.load(res.data);
    text = $(".wod-info > div>div:first-child");
});

router.get("/", function (req, res) {
    res.send(text.html());
});

module.exports = router;
