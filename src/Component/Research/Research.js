import React from 'react';
import './Research.css'
import user_one from '../../Asset/User_one.png'
import user_two from '../../Asset/User_two.png'
import user_three from '../../Asset/User_three.png'
import user_four from '../../Asset/User_four.png'
import user_five from '../../Asset/User_five.png'

const users = [
  // You can replace these URLs with actual images if available
  { src: user_one, alt: 'User 1' },
  { src: user_two, alt: 'User 2' },
  { src: user_three, alt: 'User 3' },
  { src: user_four, alt: 'User 4' },
  { src: user_five, alt: 'User 5' }
];

const HeroSection = () => {
  return (
    <div className="research-section">
      <div className="research-content">
        <div className="research-title">First of all</div>
        <p className="research-text">
          Target the right audience with precision, optimize campaigns in real-time, and drive higher ROI through optimize campaigns in real-time, and drive higher ROI through the gateway. 
        </p>
        <div className="user-group">
          {users.map((user, index) => (
            <img key={index}
             src={user.src} 
             alt={user.alt} 
             className="user" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
