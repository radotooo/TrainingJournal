const User = require("./user.model");

function getUsers() {
    return User.query()
        .select("id", "email", "username")
        .withGraphFetched("workouts(defaultSelects)");
}

function findUser(query) {
    return User.query().findOne(query);
}

function createUser(email, username, password) {
    return User.query().insert({
        email: email,
        username: username,
        password: password,
    });
}

module.exports = {
    getUsers,
    findUser,
    createUser,
};
