import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/includes/Navbar";
import About from './pages/About'
import Home from './pages/Home'
import Footer from "./components/includes/Footer";
import Button from './components/ui/Button'

function App() {
  return (
    <>
      <Navbar />
      <div className="banner">
        <h1>The Joke Bible</h1>
        <p>Daily Laughs for you and yours</p>
        <div className="search-box">
          <input type="text" name="" value="" placeholder="How can we make you laugh today ?"/>
          <img className="input-icon" src={require(`./assets/frontend1/search-copy.png`)}/>
        </div>
      </div>
      <div className="main-content">
        <div className="container">
          <div className="categories">
            <Button text="adult jokes" className="error">
            </Button>
            <Button text="dad jokes" className="hard-warning">
            </Button>
            <Button text="chirtmas jokes" className="light-warning">
            </Button>
            <Button text="job jokes" className="warning">
            </Button>
            <Button text="birthday jokes" className="light-success">
            </Button>
            <Button text="social jokes" className="dark-success">
            </Button>
            <Button text="puns" className="info">
            </Button>
            <Button text="view all" className="regular outline" icon="path-copy-7.png">
            </Button>
          </div>
          <div className="filtered-jokes">
            
          </div>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
}
export default App;
