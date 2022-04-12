const router = require("express").Router();

const User = require("../controller/userController");

/**
 * @api {POST} /User/addUser
 * @desc  Add User API
 * @access public
 * **/
router.post("/addUser", User.addUser);
/**
 * @api {POST} /User/loginUser
 * @desc  Login User API
 * @access public
 * **/
router.post("/loginUser", User.loginUser);

module.exports = router;