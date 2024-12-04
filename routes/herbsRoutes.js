const express = require('express');
const herbsController = require('../controllers/herbsController');
const router = express.Router();

router.get('/', herbsController.getHerbs);
router.get('/:id', herbsController.getHerb);
router.get('/search', herbsController.searchHerb);

module.exports = router;
