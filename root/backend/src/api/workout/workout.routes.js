const express = require("express");
const router = express.Router();
const Workout = require("./workout.model");
const workoutSchema = require("../workout/workout.validationSchema");

router.post("/", async (req, res, next) => {
    try {
        const { name, description, score, note_id } = req.body;
        const value = await workoutSchema.validateAsync(req.body);
        const workout = await Workout.query().insert({
            name: name,
            description: description,
            score: score,
            note_id: note_id,
        });
        res.status(201).json(workout);
    } catch (error) {
        res.json(error.message);
    }
});
console.log("Hello world");
router.get("/", async (req, res, next) => {
    try {
        const workout = await Workout.query().select(
            "name",
            "desctiption",
            "score"
        );
        res.status(200).json(workout);
    } catch (error) {
        next(error);
    }
});

router.get("/search", async (req, res, next) => {
    const { value } = req.body;
    try {
        const workout = await Workout.query()
            .select("name", "description", "score")
            .where("name", "like", `%${value}%`)
            .limit(5);
        res.status(200).json(workout);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
