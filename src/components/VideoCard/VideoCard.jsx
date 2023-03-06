import React from "react";
import { Link } from "react-router-dom";
import "./video-card.scss";

const VideoCard = () => {
  return (
    <>
      <Link to='/' className="video-card-wrapper">
        <div className="video-card">
          <div className="video-card__thumbnail-wrapper">
            <img
              className="video-card__thumbnail"
              src={require("../../assets/images/thumbnail.png")}
              alt="thumbnail"
            />
          </div>
          <div className="video-card__title-wrapper">
            <h3 className="video-card__title">Clinton Well Digging Course</h3>
          </div>
          <div className="video-channel-details-wrapper">
            <div className="video-channel-details">
              <div className="video-channel-icon-wrapper">
                <img
                  className="video-channel-icon"
                  src={require("../../assets/images/channel-icon.png")}
                  alt="thumbnail"
                />
              </div>
              <div className="video-channel-title-wrapper">
                <h6 className="video-channel-title"> Oga Sabinus</h6>
              </div>
            </div>
            <div className="video-info-wrapper">
              <p className="video-info">308k views- 8 days ago</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default VideoCard;
