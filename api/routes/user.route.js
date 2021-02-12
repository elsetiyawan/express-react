"use strict";

const { registerUser, loginUser } = require("../controller/user");

const userRoute = require("express").Router();

userRoute.post("/register", registerUser);

userRoute.post("/login", loginUser);

module.exports = userRoute;
