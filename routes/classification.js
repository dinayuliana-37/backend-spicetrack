const express = require("express");
const bodyParser = require("body-parser");
const classificationController = require("../controllers/classificationController");
const router = express.Router();

const multer = require('multer');
const upload = multer();

router.post("/infer", upload.single('img'), classificationController.infer);
router.get("/infer", classificationController.infer);

module.exports = router;
