import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { fetchAPI } from '../../utils/fetchAPI';
import VideoCard from '../VideoCard/VideoCard';
import './video-listing.scss';

const VideoListing = ({videos}) => {



  return (

    <div className='video-listing-wrapper'>
    <div className='video-listing'>
      {videos.map(video =>(
        <VideoCard 
          title={video.snippet?.title}
          link={`videoplay/${video.id.videoId}`}
          thumbnail={video.snippet?.thumbnails?.medium?.url}
          channelTitle={video.snippet?.channelTitle}
          releaseTime={moment(video.snippet?.publishTime,"YYYYMMDD").fromNow()}
        />
      ))
        }
        {/* <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard /> */}
      </div>
    </div>
  )
}

export default VideoListing;
