const express = require("express");
const app = express();
const formRoutes = require("./routes/crud");
const loginRoutes = require("./routes/loginRoutes");
// require("./src/connectionAndSchema/config");
const path = require("path");

app.use("/api/property", formRoutes);
app.use("/api", loginRoutes);

module.exports = app;
