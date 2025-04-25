// loadModel();
let model;
let imgFile; // Store the selected image file

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
  document.getElementById('title-result').style.display = "none";
});

// Predict function triggered by button click
document.getElementById('predictButton').addEventListener('click', () => {
  if (imgFile) {
    document.getElementById('title-result').style.display = "flex";
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
    document.getElementById('predictionResult').innerText = 
      `Paper : ${parseFloat(prediction[0]).toFixed(3)}\n\
      Rock : ${parseFloat(prediction[1]).toFixed(3)}\n\
      Scissor : ${parseFloat(prediction[2]).toFixed(3)}\n\
      Predicted class: ${predictedClass}`;
  };
}

loadModel();
