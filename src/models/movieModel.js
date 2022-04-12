const mongoose = require("mongoose");

const movieAppSchema = new mongoose.Schema(
    {
        movieName: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        cast: [{
            type: String,
            required: true
        }],
        genre: {
            type: String,
            required: true
        },
        releaseDate: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("movieApp", movieAppSchema);