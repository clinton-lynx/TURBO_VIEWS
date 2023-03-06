// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import CategoryBar from './components/CategoryBar/CategoryBar';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/Sidebar/SideBar';
import VideoListing from './components/VideoListing/VideoListing';
import Home from './pages/Home';
import VideoPlay from './pages/video-play/VideoPlay';

function App() {
  return (
      <Routes>
<Route path='/'  element={<Home />} />
<Route path='/videoplay'  element={<VideoPlay />} />
    {/* <div className="App"> */}
      
     
    {/* </div> */}
      </Routes>
    
  );
}

export default App;
