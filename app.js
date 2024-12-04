const express = require("express");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes")
const herbsRoutes = require("./routes/herbsRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");
const classificationRoutes = require("./routes/classificationRoutes");
const {pinoHttp, logger} = require('./utils/logging.js');
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

// Routes
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/herbs", herbsRoutes);
app.use("/favorites", favoritesRoutes);
app.use("/classification", classificationRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to Spice Track!!");
});

module.exports = app;