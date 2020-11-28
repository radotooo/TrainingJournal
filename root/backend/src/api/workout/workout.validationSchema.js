const Joi = require("joi");

const workout = Joi.object({
    name: Joi.string().min(6).max(35).required(),

    description: Joi.string().max(255).required(),
});

module.exports = workout;
