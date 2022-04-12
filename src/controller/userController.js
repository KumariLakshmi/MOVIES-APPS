const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    addUser(req, res) {
        if (
            !req.body.name ||
            !req.body.email ||
            !req.body.password
        ) {
            return res.status(400).send({
                message: "Please Provide Required Field",
            });
        }
        userModel.find({ email: req.body.email }).exec((err, result) => {
            if (err) {
                console.log("Error", err);
            } else {
                if (result.length > 0) {
                    return res.send({
                        message: "Already Use These Email"
                    });
                } else {
                    let user = new userModel(req.body);

                    bcrypt.genSalt(10, (err, salt) => {
                        if (err) {
                            console.log("Error", err);
                        } else {
                            bcrypt.hash(user.password, salt, (err, hash) => {
                                if (err) {
                                    console.log("Error", err);
                                } else {
                                    user.password = hash;

                                    user.save((err, result) => {
                                        if (err) {
                                            console.log("Error", err);
                                        } else {
                                            console.log("User Data Added Successfully", result);

                                            return res.status(200).send({
                                                message: "Add User",
                                                status: true,
                                                data: result
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            }
        });
    },
    loginUser: async (req, res) => {
        try {
            userModel.findOne({ email: req.body.email }, (err, user) => {
                if (err) return res.status(400).send({
                    status: false,
                    message: 'Please try after some time'
                });
                if (!user) return res.status(400).send({
                    status: false,
                    message: 'You are not registered!',
                })
                bcrypt.compare(req.body.password, user.password, (err, data) => {
                    if (!data) return res.status(400).send({
                        status: false,
                        message: 'Wrong password!'
                    })
                    else return res.status(200).send({
                        status: true,
                        token: jwt.sign({ email: user.email, _id: user._id }, "secret", {}),
                        data: user,
                    });
                })
            })
        } catch (error) {
            return res.status(500).send({
                message: "Internal server error",
                status: false
            })
        }
    }
}