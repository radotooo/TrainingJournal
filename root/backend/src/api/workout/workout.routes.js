const express = require("express");
const router = express.Router();
const Workout = require("./workout.model");
const middlewares = require("../../middlewares");
const { workout } = require("../../validationSchemas");

router.post(
    "/",
    middlewares.valdiateSchema(workout),
    async (req, res, next) => {
        try {
            const { name, description, score } = req.body;
            const workout = await Workout.query().insert({
                name: name,
                description: description,
                score: score,
                // note_id: note_id,
            });
            res.status(201).json(workout);
        } catch (error) {
            next(error);
        }
    }
);

router.get("/", async (req, res, next) => {
    try {
        const workout = await Workout.query().select(
            "name",
            "description",
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
