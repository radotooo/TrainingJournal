const Workout = require("./workout.model");

function getAllWorkouts() {
    return Workout.query().select("name", "description", "score");
}

function findWorkoutByName(name) {
    return Workout.query()
        .select("name", "description", "score")
        .where("name", "like", `%${name}%`)
        .limit(5);
}

function createWorkout(name, description, score) {
    return Workout.query().insert({
        name: name,
        description: description,
        score: score,
    });
}

module.exports = {
    getAllWorkouts,
    findWorkoutByName,
    createWorkout,
};
