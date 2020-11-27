const { Model } = require("objection");

const tableNames = require("../../../lib/constants/tableNames");

class ItemInfos extends Model {
    static get tableName() {
        return tableNames.workout;
    }
}

module.exports = ItemInfos;
