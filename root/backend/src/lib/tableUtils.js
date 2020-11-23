function addDefaultColumns(table) {
    // Adds created_at and updated_at columns on the database, setting each to datetime types. When true is passed as the first argument a timestamp type is used instead. Both columns default to being not null and using the current timestamp when true is passed as the second argument.
    table.timestamps(false, true);
    table.datetime("deleted_at");
}

function references(table, tableName, notNullable = true) {
    table.integer(`${tableName}_id`).notNullable().references("id").inTable(tableName);
}

module.exports = {
    addDefaultColumns,
    references
};