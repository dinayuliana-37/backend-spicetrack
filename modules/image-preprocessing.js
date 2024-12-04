const tf = require('@tensorflow/tfjs-node');
const sharp = require('sharp');

// Preprocess the image 

exports.preprocessImage = async (buffer) => { 
    const image = await sharp(buffer) 
      .resize(150, 150) // Adjust size as needed 
      .toFormat('jpg')
      .removeAlpha()
      .raw() 
      .toBuffer({ resolveWithObject: true }); 
      const { data, info } = image; 
      const imageTensor = tf.tensor3d(new Uint8Array(data), [info.height, info.width, info.channels]); 
      const normalizedImage = imageTensor.div(tf.scalar(255)); 
      return normalizedImage.expandDims(0);
  }
