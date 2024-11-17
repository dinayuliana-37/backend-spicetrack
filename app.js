const express = require("express");
require("./database");

const authRoutes = require("./routes/auth");
const profileRoutes = require("./routes/profile");
const articleRoutes = require("./routes/articles");

const app = express();

// Routes
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);
app.use("/articles", articleRoutes);

// Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
