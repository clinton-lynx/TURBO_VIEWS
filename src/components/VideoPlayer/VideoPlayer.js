// import React, { useEffect } from 'react';

// const VideoPlayer = ({ videoId }) => {
//   useEffect(() => {
//     const player = new window.YT.Player('player', {
//       height: '360',
//       width: '640',
//       videoId,
//       playerVars: {
//         controls: 0,
//         showinfo: 0,
//         modestbranding: 1,
//         iv_load_policy: 3,
//         disablekb: 1,
//         rel: 0
//       },
//         events: {
//             onReady: (event) => {
//                 const logo = event.target.getIframe().contentDocument.querySelector('.ytp-chrome-top .ytp-logo');
//                 if (logo) {
//                   logo.addEventListener('click', (e) => {
//                     e.preventDefault();
//                   });
//                 }}
//         },
//       });
  
//       function onPlayerReady(event) {
//         // Disable the YouTube logo
//         event.target.setOption('showInfo', 0);
        
//         // Disable the share button
//         event.target.setOption('enableShareButton', false);
        
//         // Disable the title display
//         event.target.setOption('showTitle', false);
//       }
//     }, [videoId]);
  
//     return <div id="player"></div>;
//   };
  
//   export default VideoPlayer;
import React, { useEffect, useRef, useState } from "react";
import moment from 'moment';
import millify from 'millify';
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import VideoListing from "../../components/VideoListing/VideoListing";
import NextVideo from "../../components/next-videos/NextVideo";
import { Dislike, Like, View } from "../../assets/icons/icons";
import ReactPlayer from "react-player/youtube";
import { DefaultPlayer as Video } from 'react-html5video';
import {useParams} from 'react-router-dom';
import 'react-html5video/dist/styles.css';
import { fetchAPI } from "../../utils/fetchAPI";
import "./video-play.scss";

const VideoPlay = () => { 



  const playerRef = useRef(null);

  const handlePlayerReady = (player) => {
    // Get a reference to the YouTube player once it's ready
    playerRef.current = player.getInternalPlayer();
    // Hide the YouTube logo using the YouTube API method
    playerRef.current.hideVideoInfo();
  };


  useEffect(() => {
    // Load the YouTube API script manually to ensure the YouTube Player API is available
    const youtubeScript = document.createElement('script');
    youtubeScript.src = 'https://www.youtube.com/player_api';
    document.body.appendChild(youtubeScript);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(youtubeScript);
    };
  }, []);
  
  
  const [videoDetails , setVideoDetails] = useState([]);
  const [channelDetails , setChannelDetails] = useState([]);
  const [suggestedVideos , setSuggestedVideos] = useState([]);


  const videoId = useParams().id; 
  console.log('wakanda');
  
  useEffect(() => {
    fetchAPI(`videos?part=snippet&id=${videoId}`).then((data) => setVideoDetails(data.items));
    fetchAPI(`search?part=snippet&relatedToVideoId=${videoId}&type=video`).then((data) => setSuggestedVideos(data.items));
    console.log(videoDetails);
  }, [videoId]);
  console.log(videoDetails);
  console.log(suggestedVideos);
  
  const channelId  = videoDetails[0]?.snippet?.channelId;           
  console.log(channelId);
  useEffect(() => {
    if(channelId){
      fetchAPI(`channels?part=snippet&id=${channelId}`).then((data) => setChannelDetails(data.items));
    }
  }, [channelId]);
    console.log(channelDetails);
  return (
    <div>
      <Navbar />
      <div className="videoplay-wrapper">
      <div className="videoplay">
        <div className="video-play__left"> 
          <div className="video-play-frame-wrapper"> 
            <div className="video-play-frame">
              {/* <img
                src={require("../../assets/images/video-play.png")}
                alt="playing video"
              /> */}
              {/* <ReactPlayer 
                  className='react-player'
                  url={`https://www.youtube.com/watch?v=${videoId}?fs=0&modestbranding=1&playsinline=1&rel=0`}  
                  width={`inherit`}    
                  // height={`inherit`}        
                  height={`410px`}     
                  controls = {true}  
                  style={{
                    borderRadius: '200px',
                    
                  } }

                  onReady={handlePlayerReady}
              /> */}
               {/* <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>

            <source src="https://www.youtube.com/watch?v=QumlJTVhVCc" type="video" />
            <track label="English" kind="subtitles" srcLang="en" src="https://www.youtube.com/watch?v=QumlJTVhVCc" default />
        </Video> */}
         <ReactPlayer 
                  className='react-player'
                  url={`https://www.youtube.com/watch?v=bMJD3j1AhTo`}  
         controls
              />
            </div>
            <div className="video-play__info-wrapper">
            <div className="video-play__info">
              <div className="video-play__title-wrapper">
                <h3 className="video-play__title">
                 {videoDetails[0]?.snippet?.localized?.title}
                </h3>
              </div>
              <div className="video-play__details-wrapper">
                <div className="video-play__views">
                  <span className="view-icon"><View /></span>
                  <span className="video-play__views-amt-wrapper">
                    <span className="video-play__views-amt">
                     {millify( videoDetails[0]?.statistics?.viewCount, {precision: 3})} views-{moment(videoDetails[0]?.snippet?.publishedAt,"YYYYMMDD").fromNow()} 
                    </span>
                  </span>
                </div>
                <div className="video-play__likes">
                  <span className="like-icon"><Like /></span>
                  <span className="video-play__like-amt-wrapper">
                    <span className="video-play__likes-amt">{ videoDetails[0]?.statistics.likeCount}</span>
                  </span>
                </div>
                <div className="video-play__dislike">
                  <span className="like-icon"><Dislike /></span>
                  <span className="video-play__dislike-amt-wrapper">
                    <span className="video-play__dislikes-amt">54</span>
                  </span>
                </div>
              </div>
            </div>
            </div>
            <div className="video-play__channel-info">
              <div className="video-play__channel-info__left">
                <div className="video-play__channel-icon">
                  <img
                    src={ channelDetails[0]?.snippet?.thumbnails?.default?.url}
                    alt="channel-icon"
                    />
                </div>
                <div className="video-play__channel-details-wrapper">
                  <div className="video-play__channel-name-wrapper">
                    <h4 className="video-play__channel-name">
                    {videoDetails[0]?.snippet?.channelTitle}
                    </h4>
                  </div>
                  <div className="video-play__channel-subs-wrapper">
                    <h5 className="video-play__channel-subs">
                                           {millify( channelDetails[0]?.statistics?.subscriberCount, {precision: 3})}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="video-play__channel-info__right">
                <div className="sub-btn-wrapper">
                  <button className="sub-btn">subscribe</button>
                </div>
              </div>
            </div>
            {/* <div className="creator-details">
              <span className="creator__name">Asake - Joha</span>
              <div className="creator__stream">
                <span className="creator__stream--title">
                  Stream/Download:{" "}
                </span><span className="creator__stream--link">
                http://lnk.re/Asakejoha</span>
              </div>
              <div className="creator__socials-wrapper">
                <div className="creator__socials--follow-wrapper">

                <h5 className="creator__socials--follow">Follow Asake:</h5>
                </div>
                <div className="creator__socials-wrapper">
                <div className="creator__socials">
                  http://www.instagram.com/asakemusic
                </div></div>
                <div className="creator__socials-wrapper">
                <div className="creator__socials">
                  http://www.instagram.com/asakemusic
                </div></div>
              </div>
            </div> */}
          </div>
                    </div>
        <div className="video-play__right">
          <div className="next-videos__title-wrapper">
            <h3 className="next-videos__title">Next Videos</h3>
          </div>
          <div className="next-videos-wrapper">
          {suggestedVideos.map(video =>(
        <NextVideo 
        title={video.snippet?.title}
        link={`videoplay/${video.id.videoId}`}
        thumbnail={video.snippet?.thumbnails?.standard?.url}
        channelTitle={video.snippet?.channelTitle}
     />
      ))
        }
           
            {/* <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />
            <NextVideo />   
            <NextVideo />
            <NextVideo />
            <NextVideo /> */}
          </div>
        </div>
    </div>
    </div>
        </div>
  );
};

export default VideoPlay;


