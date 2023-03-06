import React from "react";
import "./video-play.scss";
import CategoryBar from "../../components/CategoryBar/CategoryBar";
import Navbar from "../../components/Navbar/Navbar";
import SideBar from "../../components/Sidebar/SideBar";
import VideoListing from "../../components/VideoListing/VideoListing";
import NextVideo from "../../components/next-videos/NextVideo";
import { Dislike, Like, View } from "../../assets/icons/icons";

const VideoPlay = () => {
  return (
    <div>
      <Navbar />
      <div className="videoplay-wrapper">
      <div className="videoplay">
        <div className="video-play__left">
          <div className="videoplay-wrapper">
            <div className="video-play-frame">
              <img
                src={require("../../assets/images/video-play.png")}
                alt="playing video"
              />
            </div>
            <div className="video-play__info-wrapper">
            <div className="video-play__info">
              <div className="video-play__title-wrapper">
                <h3 className="video-play__title">
                  Asake - Joha (official video)
                </h3>
              </div>
              <div className="video-play__details-wrapper">
                <div className="video-play__views">
                  <span className="view-icon"><View /></span>
                  <span className="video-play__views-amt-wrapper">
                    <span className="video-play__views-amt">
                      328k views- 2days ago
                    </span>
                  </span>
                </div>
                <div className="video-play__likes">
                  <span className="like-icon"><Like /></span>
                  <span className="video-play__like-amt-wrapper">
                    <span className="video-play__likes-amt">298k</span>
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
                      Asake (Mr money)
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
