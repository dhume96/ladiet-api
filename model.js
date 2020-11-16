const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let day = new Schema(
    {
        weigth: {
            type: Number
        },
        caloricIntake: {
            type: Number
        },
        hasTakenBreakfast: {
            type: Boolean
        },
        hasTakenLunch: {
            type: Boolean
        },
        hasTakenDinner: {
            type: Boolean
        },
        date: {
            type: Date
        },
        dateOfEntry: {
            type: Date,
            default: new Date()
        },
        lastUpdated: {
            type: Date,
            default: new Date()
        }
    },
    { collection: "Days" }
);

module.exports = mongoose.model("days", day);