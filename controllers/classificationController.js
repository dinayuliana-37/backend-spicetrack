const { inference } = require("../modules/classification-model");
const { preprocessImage } = require("../modules/image-preprocessing");
require("dotenv").config()

  // Remove article from favorites
const infer = async (req, res) => {
  try {
    const preprocessedImage = await preprocessImage(req.file.buffer);
    const [index, label] = await inference(preprocessedImage);
    res.json(
      { 
        classification: label, 
        index:index, 
        url:process.env.BASE_URL + "/herbs/" + index
      }
    );
  } catch (err) {
    res
        .status(500)
        .json({ message: "Inference error", error: err.message });
  };
}

module.exports = { infer };
  
  