import React, { useState } from "react";
import './Property.css';
import { Link } from 'react-router-dom';
import property from '../../Asset/House.png'
import rent from '../../Asset/Rent.png'
// import house from '../../Asset/Research.png'
import house_one from '../../Asset/house-one.png'
import house_two from '../../Asset/house-two.png'
import house_three from '../../Asset/house-three.png'
// import { FaBed, FaMapMarkerAlt } from "react-icons/fa";
import { FaMapMarkerAlt, FaHome} from 'react-icons/fa';

const Property = () => {
  // Sample Data for listings
  const listings = [
    {
      id: 1,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [
        house_one, house_two, house_three,      
      ],
    },
    {
      id: 2,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent,  house_three,      
        
      ],
    },
    {
      id: 3,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent,  house_three,      
        
      ],
    },
    {
      id: 4,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent,  house_three,       
        
      ],
    },
    {
      id: 5,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent,  house_three,      
        
      ],
    },
    {
      id: 6,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent,  house_three,      
        
      ],
    },
    {
      id: 7,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent,   house_three,     
        
      ],
    },
    {
      id: 8,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent, house_three,    
        
      ],
    },
    {
      id: 9,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent, house_three,     
        
      ],
    },
    {
      id: 10,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent, house_three,     
        
      ],
    },
    {
      id: 11,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent, house_three,     
        
      ],
    },
    {
      id: 12,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 3,
      space: "Shared space",
      price: "₦2,500,750.40 annually",
      images: [ property, rent, house_three,     
        
      ],
    },
    // Add more listings...
  ];

  // PropertyCard Component
  const PropertyCard = ({ property }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Image navigation functions
    const handlePrevImage = () => {
      setCurrentImageIndex(
        currentImageIndex === 0
          ? property.images.length - 1
          : currentImageIndex - 1
      );
    };

    const handleNextImage = () => {
      setCurrentImageIndex(
        currentImageIndex === property.images.length - 1
          ? 0
          : currentImageIndex + 1
      );
    };

    return (
      <div className="property-card">
        {/* Image Carousel */}
        <div className="image-carousel">
          <button onClick={handlePrevImage}>{"<"}</button>
          <img
            src={property.images[currentImageIndex]}
            alt={property.name}
            className="property-image"
          />
          <button onClick={handleNextImage}>{">"}</button>
        </div>

        {/* Property Details */}
        <div className="property-details">
          <div className="name_property">
              <div className="name_pricing">
                  <h3>{property.name}</h3>
                  <p>{property.beds} bed(s)</p>
              </div>
              <div className="name_locatiom">
                <p><FaMapMarkerAlt style={{ color: '#46BAAC', fontSize: '12px', marginRight: '8px' }}/> {property.location}</p>
                <p><FaHome style={{ color: '#46BAAC', fontSize: '12px', marginRight: '8px' }}/> {property.space}</p>
              </div>
          </div>
          <div className="divide"></div>
            <div className="amount">
              <p>{property.price}</p>
              <Link to="/see-more">See more</Link>
            </div>
        </div>
      </div>
    );
  };

  // PropertyList Component to map over listings
  const PropertyList = ({ listings }) => {
    return (
      <div className="property-list">
        {listings.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    );
  };

  return (
    <div className="Listing">
      <PropertyList listings={listings} />
    </div>
  );
};

export default Property;



