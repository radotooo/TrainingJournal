const mongoose = require('mongoose');

const { Schema } = mongoose;

const wodSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    result: String,
})

module.exports = mongoose.model('wod', wodSchema);

