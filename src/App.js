import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero.js";
import Signup from './Component/Signup/Signup.js';
import Footer from './Component/Footer/Footer.js';
import Seemore from './Component/SeeMore/Seemore'
import ZillSign from './Component/New_User/Zill_Sign.js';
import Checkin from './Component/Checkin/Checkin.js';
import PaymentMethod from './Component/PaymentMethod/PaymentMethod.js';
import Payment from './Component/Payment/Payment.js';
import Application from './Component/Application/Application.js';
import AddPayment from './Component/AddPayment/AddPayment.js';
import SuccessPay from './Component/SuccessPay/SuccessPay.js'
import Landlord from './Component/Landlord/Landlord.js';

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
            <Route path="/paymentmethod" element={<PaymentMethod />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/application" element={<Application />} />
            <Route path="/addpayment" element={<AddPayment />} />
            <Route path="/success_booking" element={<SuccessPay />} />
            <Route path="/landlord" element={<Landlord />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

