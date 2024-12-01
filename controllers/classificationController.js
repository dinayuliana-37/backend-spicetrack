const { inference } = require("../modules/classification-model");
const { preprocessImage } = require("../modules/image-preprocessing");

  // Remove article from favorites
  exports.infer = async (req, res) => {
    const preprocessedImage = await preprocessImage(req.file.buffer);
    const prediction = await inference(preprocessedImage);
    // model.execute(tf.browser.fromPixels(cat));
    console.log(req, prediction);
    res.json({ classification: prediction});
  };
  
  