// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom/dist";
import "./App.scss";
// import { Explore } from "./assets/icons/icons";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/SideBar";
import VideoListing from "./components/VideoListing/VideoListing";
import Game from "./pages/game/Game";
import Home from "./pages/Home";
import Explore from "./pages/Explore/Explore";
import Trending from "./pages/trending/Trending";
import VideoPlay from "./pages/video-play/VideoPlay";
import Music from "./pages/music/Music";
import Sport from "./pages/Sport/Sport";
import Reels from "./pages/reels/Reels";

function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trending" element={<Trending />} />
        <Route path="reels" element={<Reels />} />
        <Route path="explore" element={<Explore />} />
        <Route path="gaming" element={<Game />} />
        <Route path="music" element={<Music />} />
        <Route path="sport" element={<Sport />} />
        <Route path="/videoplay/:id" element={<VideoPlay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
