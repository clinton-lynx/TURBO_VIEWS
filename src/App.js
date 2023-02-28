// import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import SideBar from './components/Sidebar/SideBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Navbar/>
          <SideBar />
      </header>
    </div>
  );
}

export default App;
