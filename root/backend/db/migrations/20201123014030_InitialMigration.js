const Knex = require("knex");
const { addDefaultColumns, references } = require("../../src/lib/tableUtils");
const tableNames = require("../../src/lib/constants/tableNames.js");

/**
 * @param {Knex} knex
 */

exports.up = async (knex) => {
    await knex.schema.createTable(tableNames.user, (table) => {
        table.increments().notNullable();
        table.string("email", 225).notNullable().unique();
        table.string("username", 225).notNullable();
        table.string("password", 100).notNullable();
        addDefaultColumns(table);
    });

    await knex.schema.createTable(tableNames.note, (table) => {
        table.increments().notNullable();
        table.text("text").notNullable();
        references(table, tableNames.user);
        addDefaultColumns(table);
    });

    await knex.schema.createTable(tableNames.workout, (table) => {
        table.increments().notNullable();
        table.string("name", 225).notNullable();
        table.text("desctiption").notNullable();
        table.string("score", 255).notNullable();
        references(table, tableNames.note);
        addDefaultColumns(table);
    });

    await knex.schema.createTable(tableNames.user_workout, (table) => {
        table.increments("id").primary();
        references(table, tableNames.user);
        references(table, tableNames.workout);
        addDefaultColumns(table);
    });
};

exports.down = async (knex) => {
    await knex.schema.dropTable(tableNames.user - workout);
    await knex.schema.dropTable(tableNames.workout);
    await knex.schema.dropTable(tableNames.note);
    await knex.schema.dropTable(tableNames.user);
};
