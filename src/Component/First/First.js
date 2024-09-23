// import React, { useState } from 'react'; // Import useState from React
// import './First.css';
// import { FaSearch } from 'react-icons/fa';

// const First = () => {
//   const [searchInput, setSearchInput] = useState(''); // useState declaration

//   const handleChange = (e) => {
//     setSearchInput(e.target.value); // Capture input value
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     console.log('Search Input:', searchInput); // Log search input
//   };

//   return (
//     <>
//       <div className="endless_choices">
//         <h1>
//           Endless Choices of houses <br /> to pick from conveniently
//         </h1>
//         <div className="endless_review">
//           <div className="reviews">
//             <h3>$3.6k+</h3>
//             <p>Sign up</p>
//           </div>
//           <div className="reviews">
//             <h3>40+</h3>
//             <p>Transactions</p>
//           </div>
//           <div className="reviews">
//             <h3>55+</h3>
//             <p>Users</p>
//           </div>
//         </div>
//       </div>
//      {/* form component */}
//      <div className="form_component">
//      <form className="search-bar" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter an address, neighbourhood or city location"
//           value={searchInput}
//           onChange={handleChange}
//         />
//         <button type="submit">
//           <FaSearch /> {/* React-icons search icon */}
//         </button>
//       </form>
//      </div>
//     </>
//   );
// };

// export default First;


import React, { useState } from 'react';
import './First.css';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const First = () => {
  const [searchInput, setSearchInput] = useState('');
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages

    const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(searchInput)}&key=${API_KEY}`;

    try {
      const response = await axios.get(url);
      if (response.data.results.length > 0) {
        setLocationData(response.data.results[0]);
        console.log('Location Data:', response.data.results[0]); // Log the location data
      } else {
        setError('No results found');
      }
    } catch (error) {
      setError('Error fetching location data');
      console.error(error);
    }
  };

  return (
    <>
      <div className="endless_choices">
        <h1>
          Endless Choices of houses <br /> to pick from conveniently
        </h1>
        <div className="endless_review">
          <div className="reviews">
            <h3>$3.6k+</h3>
            <p>Sign up</p>
          </div>
          <div className="reviews">
            <h3>40+</h3>
            <p>Transactions</p>
          </div>
          <div className="reviews">
            <h3>55+</h3>
            <p>Users</p>
          </div>
        </div>
      </div>
      {/* form component */}
      <div className="form_component">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter an address, neighbourhood or city location"
            value={searchInput}
            onChange={handleChange}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
        {locationData && (
          <div className="location-data">
            <h3>Location Details:</h3>
            <p>{locationData.formatted_address}</p>
            <p>Coordinates: {locationData.geometry.location.lat()}, {locationData.geometry.location.lng()}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default First;
