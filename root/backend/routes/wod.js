const express = require('express');
const { db } = require('../models/Wod');
const wod = require('../models/Wod')

const router = express.Router();

router.get('/', async (req, res) => {
    const query = await wod.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            res.json(result);
        }
    })
})

router.get('/:title', async (req, res) => {
    const { title } = req.params;
    const query = await wod.find({ name: title }, (err, result) => {
        if (err) {
            res.send(err)
        }
        else {
            result.length === 0 ? res.send("No such wod") : res.json(result);
        }
    })
})

router.post('/', (req, res) => {
    const dbCard = req.body;
    dbCard.date = new Date();
    wod.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

module.exports = router; 