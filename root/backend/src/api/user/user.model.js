const { Model } = require("objection");
const tableNames = require("../../lib/constants/tableNames");
const Workout = require("../workout/workout.model");

class User extends Model {
    static get tableName() {
        return tableNames.user;
    }

    static get jsonSchema() {
        return {
            type: "object",
            required: ["username", "email"],
            properties: {
                username: { type: "string" },
                email: { type: "string" },
                password: { type: "string" }, // optional
            },
        };
    }

    static relationMappings = {
        workouts: {
            relation: Model.ManyToManyRelation,
            modelClass: Workout, // result table model
            join: {
                from: "user.id",
                through: {
                    // persons_movies is the join table.
                    from: "user_workout.user_id",
                    to: "user_workout.workout_id",
                },
                to: "workout.id",
            },
        },
    };
}

module.exports = User;
