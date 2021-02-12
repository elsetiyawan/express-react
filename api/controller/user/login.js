"use strict";

const bcrypt = require("bcryptjs");

const userModel = require("../../model/user.model");

module.exports = async (req, res) => {
  const { body } = req;
  try {
    const getUser = await userModel
      .findOne({ email: body.email })
      .select("+password");

    if (await bcrypt.compare(body.password, getUser.password))
      res.status(200).json({ message: "Login success!" });
    else res.status(400).json({ message: "Login failed" });
  } catch (err) {
    res.status(400).json({ message: "Login failed" });
  }
};
