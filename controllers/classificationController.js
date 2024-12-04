const { inference } = require("../modules/classification-model");
const { preprocessImage } = require("../modules/image-preprocessing");
require("dotenv").config()

  // Remove article from favorites
const infer = async (req, res) => {
  const image = req.file;
  if (!image) {
    return res.status(400).json({
      status: false,
      message: "Invalid input",
    });
  }
  try {
    const preprocessedImage = await preprocessImage(image.buffer);
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
  
  