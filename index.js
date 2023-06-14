// const dotenv = require("dotenv");
require("dotenv").config();

const express = require("express");
const app = require("./app.js");
const mongoose = require("mongoose");
// dotenv.config({ path: "./.env" });

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log(`Error connecting to the database. \n${err}`);
  });
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
