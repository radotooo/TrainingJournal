const express = require("express");
const User = require("./user.model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const users = await User.query()
            .select("id", "email", "username")
            .withGraphFetched("workouts(defaultSelects)");
        res.json(users);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    const { email, username, password } = req.body;
    try {
        const users = await User.query().insert({
            email: email,
            username: username,
            password: password,
        });
        res.status(201).json(users);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
