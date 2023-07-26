import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../../utils/fetchAPI';
import VideoCard from '../VideoCard/VideoCard';
import VideoListingPreloader from '../VideoListingPreloader/VideoListingPreloader';
// import VideoListingPreloader from
import './video-listing.scss';

const VideoListing = ({videos}) => {
  console.log(videos);

  const [isLoaded, setIsLoaded] = useState(false); // Add state to track if videos are loaded

  // useEffect(() => {
  //   // Simulate loading of videos
  //   // setTimeout(() => {
  //   //   setIsLoaded(true);
  //   // }, 2000);
  //   if(videos){
      
  //      setIsLoaded(false);
  //   }
  // }, []);

  return (

    <div className='video-listing-wrapper'>
    {/* {isLoaded ? ( // Display the video listing if videos are loaded, else show the preloader */}
        <div className='video-listing'>
          {videos.map(video => (
            <VideoCard
              title={video.snippet?.title}
              link={`videoplay/${video.id.videoId}`}
              thumbnail={video.snippet?.thumbnails?.medium?.url}
              channelTitle={video.snippet?.channelTitle}
              releaseTime={moment(video.snippet?.publishTime,"YYYYMMDD").fromNow()}
            />
          ))}
        </div>
      {/* ) : ( */}
        {/* <VideoListingPreloader /> // Render the VideoCardPreloader component while videos are loading */}
      {/* )} */}
      </div>
  )
}

export default VideoListing;
