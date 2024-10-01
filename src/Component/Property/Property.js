import React, { useState } from "react";
import './Property.css';
import { Link } from 'react-router-dom';
import property from '../../Asset/House.png'
import rent from '../../Asset/Rent.png'
import house_one from '../../Asset/house-one.png'
import house_two from '../../Asset/house-two.png'
import house_three from '../../Asset/house-three.png'
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
      bath: 2,
      price: "₦2,500,410 annually",
      images: [
        house_one, house_two, house_three,      
      ],
    },
    {
      id: 2,
      name: "Oceanview Estate",
      location: "Lagos",
      beds: 6,
      space: "Shared space",
      bath: 4,
      price: "₦2,190,480.40 annually",
      images: [house_two, property,house_two, rent,  house_three,      
        
      ],
    },
    {
      id: 3,
      name: "Kingsville close",
      location: "Akure",
      beds: 4,
      space: "Shared space",
      bath: 2,
      price: "₦2,045,750.40 annually",
      images: [house_three, property, rent, house_two      
        
      ],
    },
    {
      id: 4,
      name: "Festac Town",
      location: "Lagos",
      beds: 3,
      space: "Shared space",
      bath: 2,
      price: "₦1,400,250.40 annually",
      images: [ property, rent,  house_three,       
        
      ],
    },
    {
      id: 5,
      name: "Sunnyvale Homes",
      location: "Abuja",
      beds: 5,
      space: "Shared space",
      bath: 2,
      price: "₦2,500,750.40 annually",
      images: [ rent,  house_three, house_two, property      
        
      ],
    },
    {
      id: 6,
      name: "Rainbow Town Estate",
      location: "Port Harcourt",
      beds: 2,
      space: "Shared space",
      bath: 2,
      price: "₦1,700,700.40 annually",
      images: [ property, rent,  house_three,      
        
      ],
    },
    {
      id: 7,
      name: "Cece Estate",
      location: "Ado",
      beds: 7,
      space: "Shared space",
      bath: 7,
      price: "₦2,200,720.40 annually",
      images: [ property, rent,   house_three,     
        
      ],
    },
    {
      id: 8,
      name: "Palmspring 8D",
      location: "Abuja",
      beds: 4,
      space: "Shared space",
      bath: 2,
      price: "₦2,100,750.40 annually",
      images: [ house_two, property, rent, house_three,    
        
      ],
    },
    {
      id: 9,
      name: "Shoprite",
      location: "Akure",
      beds: 3,
      space: "Shared space",
      bath: 2,
      price: "₦2,200,450.40 annually",
      images: [ house_three, rent, house_three, property,    
        
      ],
    },
    {
      id: 10,
      name: "Super Mega House",
      location: "Abuja",
      beds: 5,
      space: "Shared space",
      bath: 3,
      price: "₦1,500,150.40 annually",
      images: [ rent, house_three, house_one, property     
        
      ],
    },
    {
      id: 11,
      name: "Spring Estate",
      location: "Akwa Ibom",
      beds: 4,
      space: "Shared space",
      bath: 3,
      price: "₦2,500,750.40 annually",
      images: [house_three, property, rent, house_three,     
        
      ],
    },
    {
      id: 12,
      name: "Pay Spring",
      location: "Uyo",
      beds: 3,
      space: "Shared space",
      bath: 2,
      price: "₦2,500,750.40 annually",
      images: [ property, rent, house_three, rent   
        
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
                  <p>{property.beds} bed(s) &bull; {property.bath}bath(s)</p>
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