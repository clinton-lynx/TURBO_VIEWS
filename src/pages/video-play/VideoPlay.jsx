import React, { useEffect, useState } from "react";
import moment from 'moment';
import millify from 'millify';
import "./video-play.scss";
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

const VideoPlay = () => { 

  const [videoDetails , setVideoDetails] = useState([]);


  const videoId = useParams().id; 
console.log('wakanda');
     
  useEffect(() => {
    fetchAPI(`videos?part=snippet&id=${videoId}`).then((data) => setVideoDetails(data.items));
    // setVideo(data)
    console.log(videoDetails);
  }, [videoId]);
  console.log(videoDetails);

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
              <ReactPlayer 
                  className='react-player'
                  url={`https://www.youtube.com/watch?v=${videoId}`}  
                  width={`inherit`}    
                  // height={`inherit`}        
                  height={`410px`}     
                  controls = {true}  
                  style={{
                    borderRadius: '200px',
                    
                  } }
              />
               {/* <Video autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            poster="http://sourceposter.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>

            <source src="https://www.youtube.com/watch?v=QumlJTVhVCc" type="video" />
            <track label="English" kind="subtitles" srcLang="en" src="https://www.youtube.com/watch?v=QumlJTVhVCc" default />
        </Video> */}
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
                    src={require("../../assets/images/videoplay-channel-icon.png")}
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
                      2.5M Subscribers
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
            <div className="creator-details">
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
            </div>
          </div>
                    </div>
        <div className="video-play__right">
          <div className="next-videos__title-wrapper">
            <h3 className="next-videos__title">Next Videos</h3>
          </div>
          <div className="next-videos-wrapper">
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
            <NextVideo />
            <NextVideo />
            <NextVideo />
          </div>
        </div>
    </div>
    </div>
        </div>
  );
};

export default VideoPlay;
