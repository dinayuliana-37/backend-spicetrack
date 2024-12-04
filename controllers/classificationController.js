const { inference } = require("../modules/classification-model");
const { preprocessImage } = require("../modules/image-preprocessing");

  // Remove article from favorites
const infer = async (req, res) => {
    const preprocessedImage = await preprocessImage(req.file.buffer);
    const prediction = await inference(preprocessedImage);
    res.json({ classification: prediction});
  };

module.exports = { infer };
  
  