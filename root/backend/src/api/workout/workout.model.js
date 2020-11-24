const { Model } = require("objection");

class Workout extends Model {
    static get tableName() {
        return "workout";
    }
}

module.exports = Workout;
