import React from 'react';
import videoSource from '../Images/video2.mp4'; // Ensure the path is correct

const BgVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      width="600" height="fit"  controls
      style={{ opacity: 1 } }
      className="absolute top-0 left-0 w-full h-full object-cover  "
    
    >
      <source src={videoSource} type="video/mp4" />
 
    </video>
  );
};

export default BgVideo;
