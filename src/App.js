import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero.js";
import Signup from './Component/Signup/Signup.js';
import Footer from './Component/Footer/Footer.js';

function App() {
  return (
    <Router>
      <div>
        {/* Navbar inside the Router */}
        <Navbar />  
        {/* <div className="container"> */}
          {/* Define the Routes */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        {/* </div> */}
        {/* Remove duplicate Signup */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

