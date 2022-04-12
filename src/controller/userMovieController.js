const userMovieModel = require("../models/userMovieModel");

module.exports = {
  addUserMovie: async (req, res) => {
    try {
      let addMovie = new userMovieModel({
        userId: req.user._id,
        movieId: req.body.movieId,
      });
      let newAddMovie = await addMovie.save();

      return res.status(200).send({
        message: "Add User Movie Successfully",
        status: true,
        data: newAddMovie,
      });
    } catch (error) {
      return res.status(400).send({
        message: "Please Enter All Details",
        status: false,
      });
    }
  },
  getUserMovie: async (req, res) => {
    try {
      let getMovie = await userMovieModel.find({
        userId: req.user._id,
      });

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
  },
  updateUserMovie: async (req, res) => {
    try {
      let updateMovie = await userMovieModel.findOneAndUpdate(
        {
          userId: req.user._id,
          userMovieId: req.params.userMovieId
        },
        {
          $set: {
            movieId: req.body.movieId,
          }
        },
        { new: true }
      );

      if (!updateMovie) {
        return res.status(400).send({
          message: "No Record Found",
          status: false,
        });
      } else {
        return res.status(200).send({
          message: "Update User Movie Successfully",
          status: true,
          data: updateMovie,
        });
      }
    } catch (error) {
      return res.status(400).send({
        message: "Something Went Wrong",
        status: false,
        error: error,
      });
    }
  },
  deleteUserMovie: async (req, res) => {
    try {
      let deleteMovie = await userMovieModel.findOneAndDelete(
        {
          userId: req.user._id,
          userMovieId: req.params.userMovieId
        },
      );

      if (!deleteMovie) {
        return res.status(400).send({
          message: "No Record Found",
          status: false,
        });
      } else {
        return res.status(200).send({
          message: "Delete User Movie Successfully",
          status: true,
          data: deleteMovie,
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