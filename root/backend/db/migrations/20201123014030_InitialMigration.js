const Knex = require("knex")
const { addDefaultColumns, references } = require('../../src/lib/tableUtils');

/**
  * @param {Knex} knex 
 */

exports.up = async (knex) => {

    await knex.schema.createTable("user", table => {
        table.increments().notNullable();
        table.string("email", 225).notNullable().unique();
        table.string("username", 225).notNullable();
        table.string("password", 100).notNullable();
        addDefaultColumns(table);
    });

    await knex.schema.createTable("note", table => {
        table.increments().notNullable();
        table.text("text").notNullable();
        references(table, "user")
        addDefaultColumns(table);
    });

    await knex.schema.createTable("workout", table => {
        table.increments().notNullable();
        table.string("name", 225).notNullable();
        table.text("desctiption").notNullable();
        table.string("score", 255).notNullable();
        references(table, "note")
        addDefaultColumns(table);
    })

    await knex.schema.createTable("user_workout", table => {
        table.increments("id").primary();
        references(table, "user")
        references(table, "workout")
        addDefaultColumns(table);
    });
};

exports.down = async (knex) => {
    await knex.schema.dropTable("users_workout");
    await knex.schema.dropTable("workout");
    await knex.schema.dropTable("user");
    await knex.schema.dropTable("note");
};
