const Joi = require("joi");

const workout = Joi.object({
    name: Joi.string().min(6).max(35).required(),
    description: Joi.string().min(10).max(255).required(),
    score: Joi.string().min(1).max(255).required(),
});

const user = Joi.object({
    username: Joi.string().min(2).max(100).required(),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net", "bg"] },
        })
        .required(),
    password: Joi.string().min(6).max(100).required(),
});

module.exports = { workout, user };
