const express = require("express");
const profileController = require("../controllers/profileController");
const router = express.Router();

router.post("/edit-profile", profileController.editProfile);

module.exports = router;
