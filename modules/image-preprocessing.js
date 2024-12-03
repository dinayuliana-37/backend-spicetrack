const tf = require('@tensorflow/tfjs-node');
const sharp = require('sharp');

// Preprocess the image 

exports.preprocessImage = async (file) => { 
    const image = tf.node
    .decodeJpeg(contents=file, channels=3)
    .resizeNearestNeighbor([150, 150])
    .expandDims()
    .toFloat()
    return image
  }
