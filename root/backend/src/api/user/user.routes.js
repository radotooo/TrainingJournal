const express = require("express");
const createError = require("http-errors");
const middlewares = require("../../middlewares");
const { user } = require("../../validationSchemas");
const { getUsers, findUser, createUser } = require("./user.service");

const router = express.Router();

router.get("/", async (req, res, next) => {
    try {
        const users = await getUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

router.post("/", middlewares.valdiateSchema(user), async (req, res, next) => {
    const { email, username, password } = req.body;
    try {
        const doesExist = await findUser({ email: `${email}` });
        if (doesExist) {
            return next(
                createError(409, `${email} is already been registered`)
            );
        }
        const user = await createUser(email, username, password);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
