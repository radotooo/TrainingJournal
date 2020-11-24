const { Model } = require("objection");
const tableNames = require("../../lib/constants/tableNames");

class User extends Model {
    static get tableName() {
        return tableNames.user;
    }
}

module.exports = User;
