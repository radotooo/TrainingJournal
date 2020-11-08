const mongoose = require("mongoose");
const db = require('./connString')


const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
    } catch (e) {
        console.error(e.message);
        process.exit(1);
    }
}

module.exports = connectDB; 