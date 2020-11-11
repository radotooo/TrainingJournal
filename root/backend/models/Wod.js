const mongoose = require('mongoose');

const { Schema } = mongoose;

const wodSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    score: String,
    date: Date,
})

module.exports = mongoose.model('wod', wodSchema);

