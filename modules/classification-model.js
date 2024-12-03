const tf = require('@tensorflow/tfjs-node');
exports.inference = async (image) => {
      const handler = tf.io.fileSystem("./resources/web_model/model.json");
      const model = await tf.loadGraphModel(handler);
      const prediction = model.predict(image);
      console.log(prediction.dataSync());
      const probabilities = prediction.dataSync(); 
      const maxProbability = Math.max(...probabilities); 
      if (maxProbability < 0.2) 
        { 
          // return 'No class found'; 
        }
      const classes = ['adas', 'andaliman', 'asam jawa', 'bawang bombai', 'bawang merah', 'bawang putih', 'biji ketumbar', 'bukan rempah', 'bunga lawang', 'cengkeh', 'daun jeruk', 'daun kemangi', 'daun ketumbar', 'daun salam', 'jahe', 'jinten', 'kapulaga', 'kayu manis', 'kayu secang', 'kemiri', 'kemukus', 'kencur', 'kluwek', 'kunyit', 'lada', 'lengkuas', 'pala', 'saffron', 'serai', 'vanili', 'wijen'];
      const classIndex = probabilities.indexOf(maxProbability); 
      const label = classes[classIndex]; 
      return label;
    }
    
    // const inference = async (image) => {
    //   const model = await tf.node.loadSavedModel("resources/model");
    //   const prediction = model.predict(image);
    //   return prediction
    // }
