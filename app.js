const express = require("express");
const app = express();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes")
const herbsRoutes = require("./routes/herbsRoutes");
const favoritesRoutes = require("./routes/favoritesRoutes");
const classificationRoutes = require("./routes/classificationRoutes");
require("dotenv").config()



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

// Jalankan server
const port = process.env.PORT || 8080;
const base_url = process.env.BASE_URL
app.listen(port, () => {
  console.log(`App listening at ${base_url}:${port}`);
});
