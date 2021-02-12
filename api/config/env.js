const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  salt: 10,
  mongo: {
    uri: process.env.MONGO_URI,
    options: {
      keepAlive: 1000,
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
  },
};
