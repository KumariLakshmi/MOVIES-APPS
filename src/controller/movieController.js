const movieModel = require("../models/movieModel");

module.exports = {
  createMovie: async (req, res) => {
    try {
      let newMovie = new movieModel({
        movieName: req.body.movieName,
        rating: req.body.rating,
        cast: req.body.cast,
        genre: req.body.genre,
        releaseDate: req.body.releaseDate
      });
      let creatMovie = await newMovie.save();
      return res.status(200).send({
        message: "Movie Created Successfully",
        status: true,
        data: creatMovie,
      });
    } catch (error) {
      return res.status(400).send({
        message: "Please Enter All Details",
        status: false,
      });
    }
  },
  getMovie: async (req, res) => {
    try {
      let getMovie = await movieModel.find({});

      if (!getMovie) {
        return res.status(400).send({
          message: "No Record Found",
          status: false,
        });
      } else {
        return res.status(200).send({
          message: "Sucess",
          status: true,
          data: getMovie,
        });
      }
    } catch (error) {
      return res.status(400).send({
        message: "Something Went Wrong",
        status: false,
        error: error,
      });
    }
  }
}