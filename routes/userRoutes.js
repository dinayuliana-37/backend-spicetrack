const express = require('express');
const { editProfile, logout } = require('../controllers/userController');
const router = express.Router();

router.post('/edit-profile', editProfile);
router.post('/logout', logout);

module.exports = router;
