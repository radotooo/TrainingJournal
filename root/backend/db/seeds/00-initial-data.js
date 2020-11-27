const tableNames = require("../../src/lib/constants/tableNames");
exports.seed = async function (knex) {
    await knex(tableNames.user).del();
    await knex(tableNames.workout).del();
    await knex(tableNames.user_workout).del();
    await knex(tableNames.note).del();

    const user_id = await knex(tableNames.user)
        .insert({
            username: "Ivan",
            password: "Super strong password",
            email: "test@gmail.com",
        })
        .returning("id");

    const workout_id = await knex(tableNames.workout)
        .insert({
            username: "Ivan",
            password: "Super strong password",
        })
        .returning("id");
};
