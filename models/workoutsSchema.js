const mongoose = require("mongoose");

let workoutsSchema = new mongoose.Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            type:{
                type: String,
            },
            name:{
                type: String,
            },
            duration: {
                type: Number,
            },
            weight: {
                type: Number,
            },
            reps: {
                type: Number,
            },
            sets: {
                type: Number,
            },
            distance: {
                type: Number
            }
        }
    ]
});

let Workouts = mongoose.model('Workouts', workoutsSchema);
module.exports = Workouts;