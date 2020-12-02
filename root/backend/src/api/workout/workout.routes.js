const express = require("express");
const router = express.Router();
const middlewares = require("../../middlewares");
const { workout } = require("../../validationSchemas");
const {
    getAllWorkouts,
    findWorkoutByName,
    createWorkout,
} = require("./workout.service");

router.post(
    "/",
    middlewares.valdiateSchema(workout),
    async (req, res, next) => {
        try {
            const { name, description, score } = req.body;
            const workout = await createWorkout(name, description, score);
            res.status(201).json(workout);
        } catch (error) {
            next(error);
        }
    }
);

router.get("/", async (req, res, next) => {
    try {
        const workouts = await getAllWorkouts();
        res.status(200).json(workouts);
    } catch (error) {
        next(error);
    }
});

router.get("/search", async (req, res, next) => {
    const { name } = req.body;
    try {
        const workout = await findWorkoutByName(name);
        res.status(200).json(workout);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
