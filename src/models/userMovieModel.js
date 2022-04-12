const mongoose = require("mongoose");

const AddmovieSchema = new mongoose.Schema(
    {
        userId: {
            type: String,
            ref: "users"
        },
        movieId: {
            type: String,
            required: true,
            ref: "movieApps"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("addMovie", AddmovieSchema);