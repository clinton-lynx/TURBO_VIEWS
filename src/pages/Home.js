import React from "react";
import { Link } from "react-router-dom";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import VideoListing from "../components/VideoListing/VideoListing";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SideBar />
      <CategoryBar />
      <VideoListing />
    </div>
  );
};

export default Home;
