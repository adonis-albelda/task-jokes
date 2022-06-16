import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/includes/Navbar";
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
