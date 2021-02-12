const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { salt } = require("../config/env");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true, max: 150 },
  password: { type: String, max: 1000, select: false },
});

/**
 * pre save hash password
 */
userSchema.pre("save", async function save(next) {
  try {
    if (!this.isModified("password")) return next();
    const hash = await bcrypt.hash(this.password, Number(salt));
    this.password = hash;
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = mongoose.model("m_users", userSchema);
