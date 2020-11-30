const express = require("express");
const createError = require("http-errors");
const User = require("./user.model");
const middlewares = require("../../middlewares");
const { user } = require("../../validationSchemas");

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

router.post("/", middlewares.valdiateSchema(user), async (req, res, next) => {
    const { email, username, password } = req.body;
    try {
        const doesExist = await User.query().findOne({ email: `${email}` });
        if (doesExist) {
            return next(
                createError(409, `${email} is already been registered`)
            );
        }
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
