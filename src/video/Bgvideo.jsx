import React from 'react';
import videoSource from '../Images/video2.mp4'; // Ensure the path is correct

const BgVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      width="600" controls
      style={{ opacity: 1 }}
      className="absolute top-0 left-0 w-full h-full object-cover "
      onCanPlay={() => console.log('Video can play')}
  onError={(e) => console.error('Video error:', e)}
    >
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BgVideo;
