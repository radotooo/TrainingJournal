const createError = require("http-errors");
const errorTypes = {
    ValidationError: 422,
    UniqueViolationError: 409,
    NotFoundError: 404,
    ConflictError: 409,
};

const errorMessages = {
    UniqueViolationError: "Already exists.",
};

function notFound(req, res, next) {
    const err = createError(404, `Not found - ${req.originalUrl}`);
    next(err);
}

function errorHandler(error, req, res, next) {
    const statusCode =
        res.statusCode === 200 ? errorTypes[error.name] || 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        status: statusCode,
        message: errorMessages[error.name] || error.message,
        stack: process.env.NODE_ENV === "production" ? "" : error.stack,
        errors: error.errors || undefined,
    });
}

const valdiateSchema = (schema) => async (req, res, next) => {
    try {
        const data = await schema.validateAsync(req.body, {
            abortEarly: false,
            language: {
                key: "{{key}} ",
            },
        });
        next();
    } catch (error) {
        next(error);
    }

    // res.json(error.details.map((x) => x.message.replace('""', "")));
};
module.exports = { errorHandler, valdiateSchema, notFound };
