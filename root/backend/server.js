
const axios = require("axios");
const cheerio = require("cheerio");


axios.get("https://comptrain.co/home-gym/")
    .then(res => {
        const $ = cheerio.load(res.data);

        let text = $(".wod-info > div>div:first-child")
        let title = text.find('h3').text()
        let par = text.find('p').text()

    })