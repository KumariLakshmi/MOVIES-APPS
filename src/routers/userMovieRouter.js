const router = require("express").Router();
const Auth = require("../middleware/authentication");
const userAddMovies = require("../controller/userMovieController");

/**
 * @api {POST} /UserMovie/addMovie
 * @desc  Add Movie API
 * @access public
 * **/
router.post("/addMovie", Auth.VerifyToken, userAddMovies.addUserMovie);
/**
 * @api {GET} /UserMovie/getUserMovie
 * @desc  Get User Movie API
 * @access public
 * **/
router.get("/getUserMovie", Auth.VerifyToken, userAddMovies.getUserMovie);
/**
* @api {PUT} /UserMovie/updateUserMovie
* @desc  Update User Movie API
* @access public
* **/
router.put("/updateUserMovie/:userMovieId", Auth.VerifyToken, userAddMovies.updateUserMovie);
/**
* @api {DELETE} /UserMovie/deleteUserMovie
* @desc  Delete User Movie API
* @access public
* **/
router.delete("/deleteUserMovie/:userMovieId", Auth.VerifyToken, userAddMovies.deleteUserMovie);

module.exports = router;