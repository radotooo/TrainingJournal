function addDefaultColumns(table) {
    // Adds created_at and updated_at columns on the database, setting each to datetime types. When true is passed as the first argument a timestamp type is used instead. Both columns default to being not null and using the current timestamp when true is passed as the second argument.
    table.timestamps(false, true);
    table.datetime("deleted_at");
}

function references(table, tableName, notNullable = true) {
    const definition = table
        .integer(`${tableName}_id`)
        .references("id")
        .inTable(tableName);
    if (notNullable) {
        definition.notNullable();
    }
    return definition;
}

module.exports = {
    addDefaultColumns,
    references,
};
