const mongoose = require("mongoose");

const {
  env,
  mongo: { uri, options },
} = require("./env");

mongoose.Promise = global.Promise;

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB Connection Error ${err}`);
});

mongoose.connection.on("connected", () => {
  console.log("Connected To DB");
});

/**
 * Connect to mongo db
 * @returns {object} Mongoose connection
 * @public
 */
exports.dbConnect = () => {
  mongoose.connect(uri, options);
  return mongoose.connection;
};
