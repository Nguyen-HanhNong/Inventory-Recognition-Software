import React from 'react';
import NavBar from '../_components/navbar/navbar';
import ImageRecognitionPage from '../_components/image-recognition/image-recognition';

export default function Page(): React.ReactNode {
  return (
    <div>
      <NavBar />
      <ImageRecognitionPage />
    </div>
  )
}