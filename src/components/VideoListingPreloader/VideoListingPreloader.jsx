import React, { useState, useEffect } from 'react';

// SCSS for the video listing preloader
import './videoListingPreloader.scss';

// Example video card component
const VideoCard = ({ thumbnailUrl, title }) => {
  return (
    <div className="video-card">
      {/* Thumbnail image */}
      <div className="thumbnail">
        <img src={thumbnailUrl} alt="Video Thumbnail" />
      </div>
      {/* Title */}
      <div className="title">{title}</div>
    </div>
  );
};

// Video card preloader component
const VideoListingPreloader = () => {
  // State to track if the video listings are loaded
//   const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading of video listings
//     setTimeout(() => {
//       setIsLoaded(true);
//     }, 2000);
// if()
  }, []);



  return (
    <div className="video-card-preloader">
      {/* Display the preloader if video listings are not loaded */}

      <div className="loading-animation">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      {/* {!isLoaded && (
       
      )}

      {/* Render the video card components */}
      {/* {isLoaded && ( */}
        {/* <>
          <VideoCard thumbnailUrl="thumbnail1.jpg" title="Video Title 1" />
          <VideoCard thumbnailUrl="thumbnail1.jpg" title="Video Title 1" />
          <VideoCard thumbnailUrl="thumbnail1.jpg" title="Video Title 1" />
          <VideoCard thumbnailUrl="thumbnail1.jpg" title="Video Title 1" />
          <VideoCard thumbnailUrl="thumbnail1.jpg" title="Video Title 1" />
          <VideoCard thumbnailUrl="thumbnail2.jpg" title="Video Title 2" />
          <VideoCard thumbnailUrl="thumbnail2.jpg" title="Video Title 2" />
          <VideoCard thumbnailUrl="thumbnail2.jpg" title="Video Title 2" />
          <VideoCard thumbnailUrl="thumbnail3.jpg" title="Video Title 3" />
          <VideoCard thumbnailUrl="thumbnail3.jpg" title="Video Title 3" />
          <VideoCard thumbnailUrl="thumbnail3.jpg" title="Video Title 3" />
          <VideoCard thumbnailUrl="thumbnail3.jpg" title="Video Title 3" />
          <VideoCard thumbnailUrl="thumbnail3.jpg" title="Video Title 3" /> */}
          {/* Add more VideoCard components as needed */}
        {/* </> */}
      {/* )} */} 
    </div>
  );
};

export default VideoListingPreloader;
