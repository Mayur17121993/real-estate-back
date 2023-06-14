const dotenv = require("dotenv");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const formRoutes = require("./src/routes/crud");
const loginRoutes = require("./src/routes/loginRoutes");
require("./src/connectionAndSchema/config");
const path = require("path");

const mongoose = require("mongoose");
dotenv.config({ path: "./.env" });

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

app.use("/api/property", formRoutes);
app.use("/api", loginRoutes);

app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
