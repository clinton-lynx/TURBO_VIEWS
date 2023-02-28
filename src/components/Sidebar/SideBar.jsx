import React from "react";
import { Home } from "../../assets/icons/icons";
import { Tabs } from "../../utils/sideTabs";
import "./side-bar.scss";

const SideBar = () => {
  return (
    <div>
      <div className="side-bar">
        <ul className="side-bar-list">
          {Tabs.map((tab) => (
            <li className="side-tab">
              <div className="side-tab-icon">{tab.icon}</div>
              <span className="side-tab-name">{tab.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
