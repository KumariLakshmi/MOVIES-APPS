const router = require("express").Router();

const Movie = require("../controller/movieController");

/**
 * @api {POST} /Movie/createMovie
 * @desc  Add Movie API
 * @access public
 * **/
router.post("/createMovie", Movie.createMovie);
/**
 * @api {GET} /Movie/getMovie
 * @desc  Get Movie API
 * @access public
 * **/
router.get("/getMovie", Movie.getMovie);

module.exports = router;