'use client';

import React, { useState, useEffect } from 'react';

import ImageUpload from '../image-uploader/image-uploader';

import Image from 'next/image';

export default function ImageRecognitionPage() {
  const [imgsSrc, setImgsSrc] = useState([]);
  const [predictedData, setPredictedData] = useState([]);

  const handleImageRecognition = async () => {
    await getAllImages();

    // Make a server call to the recognition API route
    const response = await fetch('/api/recognition', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      const allPredictions = [];
      data.forEach((prediction) => {
        const predictions = prediction.predictions[0].displayNames;
        allPredictions.push(predictions);
      });

      console.log(`This is the predicted data: ${allPredictions}`);
      setPredictedData(allPredictions);
    } else {
      console.log('Error');
    }
  }

  const getAllImages = async () => {
    const response = await fetch('/api/recognition', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();

      // Remove the ./public prefix from the image paths
      data.forEach((path, index) => {
        data[index] = path.substring(8);
      });

      console.log(`This is data after removing the leading slash: ${data}`);
      setImgsSrc(data);
    } else {
      console.log('Error');
    }
  }

  useEffect(() => {
    const asyncFunction = async () => {
      await getAllImages();
    }

    asyncFunction();
  }, []);

  return (
    <div>
      <div id="upload-images-div" className="mt-10 text-center"> 
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Upload Images</h1>
        <p className="mb-6 text-lg font-normal text-gray-500">Click on the button below to upload images. You can upload multiple images at once. The accepted formats for the images are: .jpg and .png</p>

        <div id="image-upload-div" className="text-center">
          <ImageUpload />
        </div>
      </div>
      <br />
      <div id="images-count-div" className="text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Here are the images you uploaded.</h1>
        <div id="images-div" className="gap-8 columns-5 mt-10">
          {imgsSrc.map((link, index) => (
            <div key={index}>
              <Image src={link} alt="Image" height={500} width={500} />
              <h3>{predictedData[index]}</h3>
            </div>
          ))}
        </div>
      </div>

      <div id="image-recognition-div" className="mt-10 text-center">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Image Recognition</h1>
        <p className="mb-6 text-lg font-normal text-gray-500">Click on the button below to start the image recognition process. The images will be uploaded to Google Cloud, and a trained image recognition model will try and identify the contents of the pantry items.</p>

        <button className="px-6 py-3 text-lg font-semibold text-white transition-colors duration-200 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50" onClick={handleImageRecognition}>Start Image Recognition</button>
      </div>
    </div>
  );
}