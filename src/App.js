import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero.js";
import Signup from './Component/Signup/Signup.js';
import Footer from './Component/Footer/Footer.js';
import Seemore from './Component/SeeMore/Seemore'
import ZillSign from './Component/New_User/Zill_Sign.js';
import Checkin from './Component/Checkin/Checkin.js';

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
            <Route path="/zill_sign" element={<ZillSign />} />
            <Route path="/see-more" element={<Seemore />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkin" element={<Checkin />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

