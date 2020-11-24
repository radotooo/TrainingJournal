const express = require("express");
const wod = require("./wod/wod.routes");
const workout = require("./workout/workout.routes");
const user = require("./user/user.routes");

const router = express.Router();

router.use("/wod", wod);
router.use("/workout", workout);
router.use("/user", user);

module.exports = router;
