const express = require('express');
const favoritesController = require('../controllers/favoritesController');
const router = express.Router();

router.post('/add', favoritesController.addFavorite);
router.post('/remove', favoritesController.removeFavorite);

module.exports = router;
