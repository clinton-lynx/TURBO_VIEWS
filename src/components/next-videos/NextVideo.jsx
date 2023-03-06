import React from "react";
import { View } from "../../assets/icons/icons";
import './next-video.scss';

const NextVideo = () => {
  return (
    <div className="next-videocard-wrapper">
      <div className="next-videocard">
        <div className="next-videocard__thumbnail-wrapper">
          <img
            className="next-videocard__thumbnail"
            src={require("../../assets/images/nxt-video.png")}
            alt="playing video"
          />
        </div>
        <div className="next-videocard__info">
          <div className="next-videocard__title-wrapper">
            <h3 className="next-videocard__title">Sabinus the business guru</h3>
          </div>
          <div className="next-videocard__channel-info">
            <div className="next-videocard__channel-icon-wrapper">
              <img
                src={require("../../assets/images/channel-icon.png")}
                alt="channel-icon"
                className="next-videocard__channel-icon"
              />
            </div>
            <div className="next-videocard__channel-name-wrapper">
              <h5 className="next-videocard__channel-name">Oga Sabinus</h5>
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
    </div>
  );
};

export default NextVideo;
