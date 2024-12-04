const express = require("express");
const classificationController = require("../controllers/classificationController");
const router = express.Router();
const Multer = require('multer');
const multer = Multer({
    storage: Multer.MemoryStorage,
    fileSize: 3 * 1024 * 1024,
    limits: {
        fileSize: 3 * 1024 * 1024
    }
})
require("body-parser");

router.post("/infer", multer.single('image'), classificationController.infer);

module.exports = router;
