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
        <div className="research-title">What our users say</div>
        <p className="research-text">
          <q>I was impressed with how quickly i was able to secure a rental. Zillstate's platfrom is modetrn and straightforward, and the ability to   choose my preferred payment method made it even better. </q>
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
