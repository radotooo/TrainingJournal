const express = require("express");
const router = express.Router();
const Workout = require("./workout.model");

router.post("/", async (req, res) => {
    const { name, desctiption, score, note_id } = req.body;
    try {
        const workout = await Workout.query().insert({
            name: name,
            desctiption: desctiption,
            score: score,
            note_id: note_id,
        });
        res.status(201).json(workout);
    } catch (error) {
        console.log(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const workout = await Workout.query().select(
            "name",
            "desctiption",
            "score"
        );
        res.status(200).json(workout);
    } catch (error) {
        console.log(error.message);
    }
});
module.exports = router;
