import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryBar from "../components/CategoryBar/CategoryBar";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import VideoListing from "../components/VideoListing/VideoListing";
import { fetchAPI } from "../utils/fetchAPI";

const Home = () => {

  const [video , setVideo] = useState([]);
  const [categories , setCategory] = useState('all');
  console.log(categories);


  const searchHandler = (e) =>{
    const searchInput = document.querySelector(".header__input");
    setCategory(searchInput.value.trim())
    // searchInput.value = '';
    console.log('dey play');
    console.log(categories);
  }
  
    
  useEffect(() => {
  fetchAPI(`search?part=snippet&q=${categories}`).then((data) => setVideo(data.items));
  // setVideo(data)
}, [categories]);
console.log(video);


  return (
    <div>
      <Navbar searchHandler={searchHandler}  />
      <SideBar />
      <CategoryBar
        categories={categories}
        setCategory={setCategory}
       />
      <VideoListing videos= {video} />
    </div>
  );
};

export default Home;
