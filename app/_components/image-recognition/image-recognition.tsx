'use client';

import React, { useState } from 'react';

export default function ImageRecognitionPage() {

  const [imgsSrc, setImgsSrc] = useState([]);

  const handleUploadingImages = async (e) => {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgsSrc((imgs) => [...imgs, reader.result]);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };

  console.log(imgsSrc, imgsSrc.length);

  return (
    <div>
      <input onChange={handleUploadingImages} type="file" name="file" multiple accept="image/jpeg, image/png" />
      <br />

      <div id="images-div" className="gap-8 columns-5">
         {imgsSrc.map((link) => (
          <img src={link} className="" />
        ))}
      </div>
    </div>
  );

}
