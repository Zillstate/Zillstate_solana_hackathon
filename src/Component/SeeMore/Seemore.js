// import React, {useState} from 'react';
// import { Link } from 'react-router-dom';
// import { FaMapMarkerAlt, FaHome} from 'react-icons/fa';
// import './Seemore.css'; 
// import property from '../../Asset/House.png'
// import main from '../../Asset/main-image.png'
// import subImage from '../../Asset/left-sub-image.png'
// import firstLeftImage from '../../Asset/first-left.png'
// import leftImage from '../../Asset/second-left.png'
// import { useNavigate } from 'react-router-dom'


// const SeeMore = () => {
//   const [duration, setDuration] = useState('Quarterly');
    

//   const navigate = useNavigate();

//   const HandleApply = () => {
//     navigate('/application'); // '/target-page'
//   };

//   return (
//     <div className="property-container">
//       {/* Property Main Section */}

//           <div className="property-images">
//             <div className="main-image">
//               <img src={main} alt="property" />
//             </div>
            
//             <div className="sub-images">
//               <div className="main-sub-image">
//                 <img src={subImage} alt="sub property" />
//               </div>
              
//               <div className="sub-sub-images">
//                 <div className="sub-image">
//                   <img src={firstLeftImage} alt="first left ima" />
//                 </div>
//                 <div className="sub-image">
//                   <img src={leftImage} alt="left ima" />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="rent-portal">
//       {/* Left Section: Property Details */}
//       <div className="property-full-details">
//         <h1>₦2,580,300.80/yr</h1>
//         <p className='property-location'>IKORODU, LAGOS, NIGERIA</p>
//         <p className='property-space'>1 bed(s) • Entire space • 12 hrs power • Unfurnished</p>
//       <div className="divide"></div>

//         <section className='special'>
//           <h2>What's special</h2>
//           <p>
//            Bright end  unit town home located just north of the airport around. Our AI-driven tools provide actionable insights, increase productivity and imporove decision-making. With Catalyst, your business Staus competitive in an evolving digital
//           </p>
//           <div className="divide"></div>

//         </section>

//         <section className="features">
//           <h2>Features</h2>
//           <div className="feature-details">
//             <div className="feature-item">
//               <h3>Bedrooms & Bathrooms</h3>
//               <ul>
//                 <li>Bedrooms: 3</li>
//                 <li>Bathrooms: 4</li>
//                 <li>Full Bathrooms: 3</li>
//                 <li>Dinings: 1</li>
//                 <li>1/2 Bathrooms: 2</li>
//               </ul>
//             </div>

//             <div className="feature-item items">
//               <h3>Features</h3>
//               <ul>
//                 <li>Walk in closet</li>
//                 <li>Flooring: Hardwood</li>
//               </ul>
//             </div>
//           </div>

//           <div className="feature-details">
//               <div className="feature-item">
//                 <h3>Appliances</h3>
//                 <ul>
//                   <li>Bedrooms: 3</li>
//                   <li>Bathrooms: 4</li>
//                 </ul>
//               </div>

//               <div className="feature-item items">
//                 <h3>Interior areas</h3>
//                 <ul>
//                   <li>Total interior livable areas: 1280 sqft</li>
//                   <li>Parking area: Available</li>
//                 </ul>
//               </div>
//           </div>
//         </section>
//         <div className="divide"></div>

//         <div className='application'>
//           <p>23 days on Zillstate | 17 contacts | 4 applications</p>
//         </div>
//       </div>

//       {/* Right Section: Rent Details */}
//       <div className="rent-details">
//         <h2>Rent Price</h2>
//         <h3>NGN 2,580,300.80/yr</h3>

//         <label htmlFor="duration">DURATION</label>
//         <select
//           id="duration"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//         >
//           <option value="Quarterly">Quarterly</option>
//           <option value="Yearly">Yearly</option>
//         </select>

//         <div className="breakdown">
//           <p>Rent: <span>NGN 240,520.20 monthly</span></p>
//           <p>Service Charge: <span>NGN 130,500.00</span></p>
//           <p>Refundable security deposit: <span>NGN 32,500</span></p>
//           <p>Electricity bill: <span>NGN 15,500</span></p>
//           <p>VAT: <span>NGN 4,920</span></p>
//         </div>
//         <div className="divide"></div>
        
//         <div className="total-amount">
//           <p>Rent</p>
//           <p>NGN 240,520.20</p>
//         </div>

//         {/* <h4>Total Rent: NGN 240,520.20</h4> */}

//         <div className="actions">
//             <div className="term-privacy">
//                 <input type="checkbox" id="terms" />
//                   <label htmlFor="terms">
//                     I have read and agreed to the <a href="/">terms of service</a>
//                   </label>
//             </div>
//           {/* <button className="apply-btn" onClick={HandleApply}>Apply now</button> */}
//           <button className="apply-btn" onClick={HandleApply}>Apply now</button>
//           <button className="tour-btn">Book a tour</button>
//         </div>
//       </div>
//     </div>
           
          


//       {/* Related Rentals Section */}
//       <h3 className="related-title">See available rentals near here</h3>
//       <div className="related-rentals">
//         {[1, 2, 3].map((item) => (
//           <div key={item} className="rental-card">
//             <img
//               className="rental-image"
//               src={property}
//               alt="Property"
//             />
//             <div className="name_property">
//               <div className="name_pricing">
//                   <h3>Palmspring 2D</h3>
//                   <p> 4 bed(s) &bull; 2 bath(s)</p>
//               </div>
//               <div className="name_locatiom">
//                 <p><FaMapMarkerAlt style={{ color: '#46BAAC', fontSize: '12px', marginRight: '8px' }}/> Abuja</p>
//                 <p><FaHome style={{ color: '#46BAAC', fontSize: '12px', marginRight: '8px' }}/>Shared space</p>
//               </div>
//           </div>
//           <div className="divide"></div>
//             <div className="amount">
//               <p>₦2,500,750.40 annually</p>
//               <Link to="/signup">See more</Link>
//             </div>
//         </div>
//         ))}
//       </div>
//     </div>

//   );
// };

// export default SeeMore;







// import React, { useState } from 'react';
// import { FaMapMarkerAlt, FaHome } from 'react-icons/fa';
// import './Seemore.css'; 
// import property from '../../Asset/House.png'
// import main from '../../Asset/main-image.png'
// import subImage from '../../Asset/left-sub-image.png'
// import firstLeftImage from '../../Asset/first-left.png'
// import leftImage from '../../Asset/second-left.png'
// import Application from '../Application/Application'; // Import the Application component

// const SeeMore = () => {
//   const [duration, setDuration] = useState('Quarterly');
//   const [showApplication, setShowApplication] = useState(false); // State to toggle the application form

//   // Function to handle the apply button click
//   const handleApplyClick = () => {
//     setShowApplication(true); // Show the application form
//   };

//   // Function to close the application form (optional if you want a close button)
//   const closeApplication = () => {
//     setShowApplication(false);
//   };

//   return (
//     <div className="property-container">
//       {/* Property Main Section */}
//       <div className="property-images">
//         {/* Main and sub images */}
//         {/* Rent portal details */}
//       </div>

//       <div className="rent-details">
//         <h2>Rent Price</h2>
//         <h3>NGN 2,580,300.80/yr</h3>

//         <label htmlFor="duration">DURATION</label>
//         <select
//           id="duration"
//           value={duration}
//           onChange={(e) => setDuration(e.target.value)}
//         >
//           <option value="Quarterly">Quarterly</option>
//           <option value="Yearly">Yearly</option>
//         </select>

//         <div className="total-amount">
//           <p>Rent</p>
//           <p>NGN 240,520.20</p>
//         </div>

//         <div className="actions">
//           <div className="term-privacy">
//             <input type="checkbox" id="terms" />
//             <label htmlFor="terms">
//               I have read and agreed to the <a href="/">terms of service</a>
//             </label>
//           </div>
//           <button className="apply-btn" onClick={handleApplyClick}>Apply now</button>
//           <button className="tour-btn">Book a tour</button>
//         </div>
//       </div>

//       {/* Conditional rendering of the Application form as an overlay */}
//       {showApplication && (
//         <div className="application-overlay">
//           <Application />
//           <button className="close-btn" onClick={closeApplication}>Close</button> {/* Optional close button */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SeeMore;





import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaHome} from 'react-icons/fa';
import './Seemore.css'; 
import Application from '../Application/Application';
import property from '../../Asset/House.png'
import main from '../../Asset/main-image.png'
import subImage from '../../Asset/left-sub-image.png'
import firstLeftImage from '../../Asset/first-left.png'
import leftImage from '../../Asset/second-left.png'
// import { useNavigate } from 'react-router-dom'


const SeeMore = () => {
  const [duration, setDuration] = useState('Quarterly');
   
    const [showApplication, setShowApplication] = useState(false); // State to toggle the application form

  // Function to handle the apply button click
  const handleApplyClick = () => {
    setShowApplication(true); // Show the application form
  };

  // Function to close the application form (optional if you want a close button)
  const closeApplication = () => {
    setShowApplication(false);
  };


  // const navigate = useNavigate();

  // const HandleApply = () => {
  //   navigate('/application'); // '/target-page'
  // };

  return (
    <>
    <div className="property-container">
      {/* Property Main Section */}

          <div className="property-images">
            <div className="main-image">
              <img src={main} alt="property" />
            </div>
            
            <div className="sub-images">
              <div className="main-sub-image">
                <img src={subImage} alt="sub property" />
              </div>
              
              <div className="sub-sub-images">
                <div className="sub-image">
                  <img src={firstLeftImage} alt="first left ima" />
                </div>
                <div className="sub-image">
                  <img src={leftImage} alt="left ima" />
                </div>
              </div>
            </div>
          </div>

          <div className="rent-portal">
      {/* Left Section: Property Details */}
      <div className="property-full-details">
        <h1>₦2,580,300.80/yr</h1>
        <p className='property-location'>IKORODU, LAGOS, NIGERIA</p>
        <p className='property-space'>1 bed(s) • Entire space • 12 hrs power • Unfurnished</p>
      <div className="divide"></div>

        <section className='special'>
          <h2>What's special</h2>
          <p>
           Bright end  unit town home located just north of the airport around. Our AI-driven tools provide actionable insights, increase productivity and imporove decision-making. With Catalyst, your business Staus competitive in an evolving digital
          </p>
          <div className="divide"></div>

        </section>

        <section className="features">
          <h2>Features</h2>
          <div className="feature-details">
            <div className="feature-item">
              <h3>Bedrooms & Bathrooms</h3>
              <ul>
                <li>Bedrooms: 3</li>
                <li>Bathrooms: 4</li>
                <li>Full Bathrooms: 3</li>
                <li>Dinings: 1</li>
                <li>1/2 Bathrooms: 2</li>
              </ul>
            </div>

            <div className="feature-item items">
              <h3>Features</h3>
              <ul>
                <li>Walk in closet</li>
                <li>Flooring: Hardwood</li>
              </ul>
            </div>
          </div>

          <div className="feature-details">
              <div className="feature-item">
                <h3>Appliances</h3>
                <ul>
                  <li>Bedrooms: 3</li>
                  <li>Bathrooms: 4</li>
                </ul>
              </div>

              <div className="feature-item items">
                <h3>Interior areas</h3>
                <ul>
                  <li>Total interior livable areas: 1280 sqft</li>
                  <li>Parking area: Available</li>
                </ul>
              </div>
          </div>
        </section>
        <div className="divide"></div>

        <div className='application'>
          <p>23 days on Zillstate | 17 contacts | 4 applications</p>
        </div>
      </div>

      {/* Right Section: Rent Details */}
      <div className="rent-details">
        <h2>Rent Price</h2>
        <h3>NGN 2,580,300.80/yr</h3>

        <label htmlFor="duration">DURATION</label>
        <select
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        >
          <option value="Quarterly">Quarterly</option>
          <option value="Yearly">Yearly</option>
        </select>

        <div className="breakdown">
          <p>Rent: <span>NGN 240,520.20 monthly</span></p>
          <p>Service Charge: <span>NGN 130,500.00</span></p>
          <p>Refundable security deposit: <span>NGN 32,500</span></p>
          <p>Electricity bill: <span>NGN 15,500</span></p>
          <p>VAT: <span>NGN 4,920</span></p>
        </div>
        <div className="divide"></div>
        
        <div className="total-amount">
          <p>Rent</p>
          <p>NGN 240,520.20</p>
        </div>

        {/* <h4>Total Rent: NGN 240,520.20</h4> */}

        <div className="actions">
            <div className="term-privacy">
                <input type="checkbox" id="terms" />
                  <label htmlFor="terms">
                    I have read and agreed to the <a href="/">terms of service</a>
                  </label>
            </div>
          {/* <button className="apply-btn" onClick={HandleApply}>Apply now</button> */}
          <button className="apply-btn" onClick={handleApplyClick}>Apply now</button>
          <button className="tour-btn">Book a tour</button>
        </div>
      </div>
      
           {/* Conditional rendering of the Application form as an overlay */}
           {showApplication && (
        <div className="application-overlay">
          <Application />
          <button className="close-btn" onClick={closeApplication}>Close</button> {/* Optional close button */}
        </div>
      )}
    </div>
    </div>

           
          


      {/* Related Rentals Section */}
      <h3 className="related-title">See available rentals near here</h3>
      <div className="related-rentals">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rental-card">
            <img
              className="rental-image"
              src={property}
              alt="Property"
            />
            <div className="name_property">
              <div className="name_pricing">
                  <h3>Palmspring 2D</h3>
                  <p> 4 bed(s) &bull; 2 bath(s)</p>
              </div>
              <div className="name_locatiom">
                <p><FaMapMarkerAlt style={{ color: '#46BAAC', fontSize: '12px', marginRight: '8px' }}/> Abuja</p>
                <p><FaHome style={{ color: '#46BAAC', fontSize: '12px', marginRight: '8px' }}/>Shared space</p>
              </div>
          </div>
          <div className="divide"></div>
            <div className="amount">
              <p>₦2,500,750.40 annually</p>
              <Link to="/signup">See more</Link>
            </div>
        </div>
        ))}
      </div>
    {/* </div> */}

    </>

  );
};

export default SeeMore;
