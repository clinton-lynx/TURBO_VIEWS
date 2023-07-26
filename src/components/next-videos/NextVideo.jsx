import React from "react";
import { Link } from "react-router-dom";
import { View } from "../../assets/icons/icons";
import './next-video.scss';

const NextVideo = ({title,link,thumbnail,channelTitle, releaseTime}) => {
  return (
    <Link to={link} className="next-videocard-wrapper">
      <div className="next-videocard">
        <div className="next-videocard__thumbnail-wrapper">
          <img
            className="next-videocard__thumbnail"
            src={thumbnail}

            alt="playing video"
          />
        </div>
        <div className="next-videocard__info">
          <div className="next-videocard__title-wrapper">
            <h3 className="next-videocard__title">{title}</h3>
          </div>
          <div className="next-videocard__channel-info">
            <div className="next-videocard__channel-icon-wrapper">
              <img
                // src={thumbnail}
                alt="channel-icon"
                className="next-videocard__channel-icon"
              />
            </div>
            <div className="next-videocard__channel-name-wrapper">
              <h5 className="next-videocard__channel-name">{channelTitle}</h5>
            </div>
          </div>
          <div className="next-videocard__view-info-wrapper">
            <div className="next-videocard__view-info__views">
              <span className="view-icon">
                <View />
              </span>
              <span className="next-videocard__view-info__views-amt-wrapper">
                <span className="next-videocard__view-info__views-amt">
                  328k views- 2days ago
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NextVideo;
