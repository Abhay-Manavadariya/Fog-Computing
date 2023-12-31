"use strict";

const express = require("express");
const sharp = require("sharp");
const api = express.Router();

api.post("/img", async (req, res) => {
  try {
    const { imageData, fileName } = req.body;

    if (!imageData) {
      return res.status(400).json({ error: "No image data provided." });
    }

    // Convert base64 image data to a buffer
    const imageBuffer = Buffer.from(imageData, "base64");

    // Use sharp to process the image
    const { size, width, height } = await sharp(imageBuffer).metadata();

    const result = {
      message: "Response From server1",
      fileInfo: {
        fileName: fileName,
        fileSize: size,
        dimensions: { width, height },
      },
    };

    res.json(result);
  } catch (error) {
    console.error("Error processing image:", error);
    res.status(500).json({ error: "Error processing image." });
  }
});

module.exports = api;
