const express = require("express");
const classificationController = require("../controllers/classificationController");
const router = express.Router();
const multer = require('multer');
const upload = multer();
require("body-parser");

router.post("/infer", upload.single('img'), classificationController.infer);

module.exports = router;
