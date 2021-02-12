"use strict";

const express = require("express");
const cors = require("cors");

const { env } = require("./env");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());

// routing
app.use("/api", require("../routes"));

module.exports = app;
