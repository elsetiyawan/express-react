"use strict";

const userModel = require("../../model/user.model");

module.exports = async (req, res) => {
  const { body } = req;
  try {
    const userData = {
      email: body.email,
      password: body.password,
    };
    const saveData = new userModel(userData);
    await saveData.save();
    res.status(200).json({ message: "Registration success!" });
  } catch (err) {
    res.status(400).json({ message: "Registration failed" });
  }
};
