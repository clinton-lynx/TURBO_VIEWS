import React from "react";
import {
  Mic,
  Notifications,
  SearchIcon,
  ToggleSideBar,
  Video,
} from "../../assets/icons/icons";
// import { ToggleSideBar } from './../assets/icons/icons';
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header_left">
          <div className="toggle-tab-wrapper">
            <div className="toggle-tab">
              <ToggleSideBar />
            </div>
            
          </div>
          <div className="logo-wrapper">
            <div className="logo">
              <span className="logo__turbo">Turbo</span>
              <span className="logo__views">views</span>
            </div>
            <div className="logo-mobile">
              <span className="logo-mobile__turbo">T</span>
              <span className="logo-mobile__views">v</span>
            </div>

          </div>
        </div>
        <div className="header__middle">
          <div className="searchbar">
            <input className="header__input" placeholder='Search' type="text" />
            <div className="search-wrapper">
              <SearchIcon />
            </div>
          </div>
          <div className="mic-wrapper">
            <div className="mic">
              <Mic />
            </div>
          </div>
        </div>
        <div className="header__right">
          <div className="camera-wrapper">
            <div className="camera">
              <Video />
            </div>
          </div>
          <div className="notify-wrapper">
            <div className="notify">
              <Notifications />
            </div>
          </div>
          <div className="user-avatar-wrapper">
            <div className="user">
              <img src="./user (3).png" alt="user" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
