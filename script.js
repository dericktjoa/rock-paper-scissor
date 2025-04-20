// let model;
// let imgFile; // To store the selected image file

// // Load the model
// async function loadModel() {
//   model = await tf.loadLayersModel('model_web/model.json');
//   console.log("✅ Model loaded");
// }

// // Image upload handler
// document.getElementById('imageUpload').addEventListener('change', (e) => {
//   imgFile = e.target.files[0]; // Store the selected file
//   console.log("Image selected:", imgFile.name);
// });

// // Predict function triggered by button click
// document.getElementById('predictButton').addEventListener('click', () => {
//   if (imgFile) {
//     predictImage(imgFile);
//   } else {
//     alert('Please upload an image first!');
//   }
// });

// async function predictImage(file) {
//   const img = new Image();
//   img.src = URL.createObjectURL(file);
  
//   img.onload = async () => {
//     // Create a canvas to manipulate the image
//     const canvas = document.createElement('canvas');
//     const ctx = canvas.getContext('2d');
    
//     // Set canvas size to image size
//     canvas.width = img.width;
//     canvas.height = img.height;

//     // Draw the image onto the canvas
//     ctx.drawImage(img, 0, 0);

//     // Get image data
//     const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//     const data = imageData.data;

//     // Convert to grayscale
//     for (let i = 0; i < data.length; i += 4) {
//       const r = data[i];     // Red channel
//       const g = data[i + 1]; // Green channel
//       const b = data[i + 2]; // Blue channel

//       // Calculate grayscale value
//       const gray = 0.2989 * r + 0.587 * g + 0.114 * b;

//       // Set all channels to grayscale value (R, G, B)
//       data[i] = data[i + 1] = data[i + 2] = gray;
//     }

//     // Put the modified data back onto the canvas
//     ctx.putImageData(imageData, 0, 0);

//     // Convert canvas to tensor and resize it to the model's input shape
//     const tensor = tf.browser.fromPixels(canvas)
//       .resizeNearestNeighbor([150, 150]) // Adjust if your model's input size is different
//       .toFloat()
//       .div(tf.scalar(255.0))
//       .expandDims();

//     // Make prediction with the model
//     const prediction = await model.predict(tensor).data();
//     console.log("Prediction:", prediction);

//     // Map the prediction to the class names
//     const classNames = ['rock', 'paper', 'scissors']; // Adjust class names based on your model
//     const predictedIndex = prediction.indexOf(Math.max(...prediction));
//     const predictedClass = classNames[predictedIndex];
//     console.log("Predicted class:", predictedClass);

//     // Display prediction result on the webpage
//     document.getElementById('predictionResult').innerText = `Predicted class: ${predictedClass}`;
//   };
// }

// loadModel();
let model;
let imgFile; // Store the selected image file

// const input = document.getElementById('imageUpload');
// const uploadedImage = document.getElementById('uploadedImage');

// Load the model (assuming it's stored locally or remotely)
async function loadModel() {
  model = await tf.loadLayersModel('model_web/model.json');
  console.log("✅ Model loaded");
}

// Image upload handler
document.getElementById('imageUpload').addEventListener('change', (e) => {
  imgFile = e.target.files[0]; // Store the selected file
  if (imgFile) {
          const reader = new FileReader();
          
      
          // When the file is loaded, update the src of the image element
          reader.onload = function(event) {
            uploadedImage.src = event.target.result; // Set image source to the uploaded file's data
          };
      
          // Read the file as a data URL
          reader.readAsDataURL(imgFile);
    }
  console.log("Image selected:", imgFile.name);
  document.getElementById('predictionResult').innerText = ``;
});
// input.addEventListener('change', (e) => {
//     const imgFile = e.target.files[0]; // Get the selected file
//     if (imgFile) {
//       const reader = new FileReader();
      
  
//       // When the file is loaded, update the src of the image element
//       reader.onload = function(event) {
//         uploadedImage.src = event.target.result; // Set image source to the uploaded file's data
//       };
  
//       // Read the file as a data URL
//       reader.readAsDataURL(imgFile);
//     }
//   });
// Predict function triggered by button click
document.getElementById('predictButton').addEventListener('click', () => {
  if (imgFile) {
    predictImage(imgFile);
  } else {
    alert('Please upload an image first!');
  }
});

async function predictImage(file) {
  const img = new Image();
  img.src = URL.createObjectURL(file);

  img.onload = async () => {
    // Create a canvas to manipulate the image
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size to image size
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw the image onto the canvas
    ctx.drawImage(img, 0, 0);

    // Get image data
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Optionally, convert the image to grayscale (remove for RGB)
    // for (let i = 0; i < data.length; i += 4) {
    //   const r = data[i];
    //   const g = data[i + 1];
    //   const b = data[i + 2];
    //   const gray = 0.2989 * r + 0.587 * g + 0.114 * b;
    //   data[i] = data[i + 1] = data[i + 2] = gray;
    // }

    // Put the image data back onto the canvas
    ctx.putImageData(imageData, 0, 0);

    // Convert canvas to tensor
    const tensor = tf.browser.fromPixels(canvas)
      .resizeNearestNeighbor([150, 150]) // Resize image to model's expected input shape
      .toFloat()  // Convert to float
      .div(tf.scalar(255.0)) // Normalize pixel values to [0, 1]
      .expandDims();  // Add batch dimension

    // Make prediction with the model
    const prediction = await model.predict(tensor).data();
    console.log("Prediction:", prediction);

    // Get the class with the highest probability
    const classNames = ['paper', 'rock', 'scissors']; // Class names based on your model
    const predictedIndex = prediction.indexOf(Math.max(...prediction));
    const predictedClass = classNames[predictedIndex];
    console.log("Predicted class:", predictedClass);

    // Display prediction result on the webpage
    document.getElementById('predictionResult').innerText = `Prediction\nPaper : ${parseFloat(prediction[0]).toFixed(3)}%\nRock : ${parseFloat(prediction[1]).toFixed(3)}%\nScissor : ${parseFloat(prediction[2]).toFixed(3)}%\nPredicted class: ${predictedClass}`;
  };
}

loadModel();
