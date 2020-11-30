const { Model } = require("objection");
const tableNames = require("../../lib/constants/tableNames");

class Workout extends Model {
    static get tableName() {
        return tableNames.workout;
    }

    static modifiers = {
        defaultSelects(query) {
            query.select("name", "description");
        },
    };
}

module.exports = Workout;
