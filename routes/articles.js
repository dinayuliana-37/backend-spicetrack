const express = require("express");
const articleController = require("../controllers/articleController");
const router = express.Router();

// Existing routes
router.get("/single/:id", articleController.getSingleArticle);
router.get("/all", articleController.getAllArticles);
router.get("/search", articleController.searchArticles);
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Test route works" });
});

// Fix: Use the controller method for adding to favorites
router.post("/add-to-favorite", articleController.addToFavorite);

// Fix: Use the controller method for removing from favorites
router.post("/remove-from-favorite", articleController.removeFromFavorite);

module.exports = router;
