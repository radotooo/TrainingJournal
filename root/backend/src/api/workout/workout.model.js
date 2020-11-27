const { Model } = require("objection");
const tableNames = require("../../lib/constants/tableNames");

class Workout extends Model {
    static get tableName() {
        return tableNames.workout;
    }

    static modifiers = {
        defaultSelects(query) {
            query.select("name", "desctiption");
        },
    };

    static get jsonSchema() {
        return {
            type: "object",
            required: ["name", "desctiption"],
            properties: {
                name: { type: "string", maxLenght: 80 },
                desctiption: { type: "string" },
                score: { type: "string" }, // optional
                note_id: { type: "integer" },
            },
        };
    }
}

module.exports = Workout;
