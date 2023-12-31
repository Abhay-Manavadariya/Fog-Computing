const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Path to the image
const imagePath = "C:/Users/HP/Desktop/test.jpg";

// Read the image file as a base64 string
const imageBase64 = fs.readFileSync(imagePath, { encoding: "base64" });

// Get the file name from the path
const fileName = path.basename(imagePath);

// Make a POST request to the server
axios
  .post(
    "http://localhost:8000/img",
    { imageData: imageBase64, fileName },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error.message);
  });
