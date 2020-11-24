const express = require("express");
const user = require("./user.model");

const router = express.Router();

router.get("/", async (req, res) => {
    const users = await user.query().select("id", "email", "username");
    res.json(users);
});

router.post("/", async (req, res) => {
    const { email, username, password } = req.body;
    const users = await user.query().insert({
        email: email,
        username: username,
        password: password,
    });
    res.json(users);
});

console.log("hello");
module.exports = router;
