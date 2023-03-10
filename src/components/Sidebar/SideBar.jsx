import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Explore, Home, Library, Playlist, VideoPlay } from "../../assets/icons/icons";
import { Tabs } from "../../utils/sideTabs";
import "./side-bar.scss";

const SideBar = () => {
  return (
    <div>
      <div className="side-bar">
        <ul className="side-bar-list">
          {/* {Tabs.map((tab) => (
            <li className="side-tab-wrapper">
              <NavLink
                to={`${tab.name === "Home" ? "/" : tab.name}`}
                className="side-tab"
              >
                <div className="side-tab-icon">{tab.icon}</div>
                <span className="side-tab-name">{tab.name}</span>
              </NavLink>
            </li>
          ))} */}
           <li className="side-tab-wrapper">
              <NavLink
                to={`/`}
                className="side-tab"
              >
                <div className="side-tab-icon"><Home/></div>
                <span className="side-tab-name">Home</span>
              </NavLink>
            </li>
           <li className="side-tab-wrapper">
              <NavLink
                to={`/Explore`}
                className="side-tab"
              >
                <div className="side-tab-icon"><Explore /></div>
                <span className="side-tab-name">Explore</span>
              </NavLink>
            </li>
           <li className="side-tab-wrapper">
              <NavLink
                to={`/Reels`}
                className="side-tab"
              >
                <div className="side-tab-icon"><VideoPlay/></div>
                <span className="side-tab-name">Reels</span>
              </NavLink>
            </li>
           <li className="side-tab-wrapper">
              <NavLink
                to={`/Subscription`}
                className="side-tab"
              >
                <div className="side-tab-icon"><Playlist/></div>
                <span className="side-tab-name">Subbscription</span>
              </NavLink>
            </li>
           <li className="side-tab-wrapper">
              <NavLink
                to={`/Library`}
                className="side-tab"
              >
                <div className="side-tab-icon"><Library/></div>
                <span className="side-tab-name">Library</span>
              </NavLink>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
