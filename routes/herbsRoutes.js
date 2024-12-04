const express = require('express');
const { getHerbs, getHerb, searchHerb } = require('../controllers/herbsController');
const router = express.Router();

router.get('/', getHerbs);
router.get('/:id', getHerb);
router.get('/search', searchHerb);

module.exports = router;
