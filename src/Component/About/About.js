import React from 'react'
import './About.css'
// import { FaCircle } from 'react-icons/fa';
import first_of_all from '../../Asset/First_of_all.png'
import reviews from '../../Asset/review.png'
import user from '../../Asset/user.png'
import signup from '../../Asset/signup.png'
import newlist from '../../Asset/newlist.png'

const About = () => {
  return (
    <>
    <div className='about_spacing'>
      <div className="about">
        <div className='icons'>
          <div className="icons_tags">
            <div className="top_section">
              <div className='top_section_sub'>
                <img src={signup} alt="signup icon" width={35} />
                <h3>Speed &amp; Efficiency</h3>
              </div>
              <div className="text_section">
             Powered by Solana blockchain, our platform ensure instant transaction and a smooth user experience &ndash; Zillstate speeds up you rental jouney from start to finish.
              </div>
            </div>
            {/* second section */}

            {/* flex scton */}
            <div className="second_section">
              <div className="flex_second_section">
                <div className="first_section">
                  <div className="icon_section">
                  <img src={reviews} alt="review icon" width={20}  />
                  <h4>Crypto enable</h4>
                  </div>
                  <p className="text_section">
                 Whether you prefer paying with your credit card or paying with Cryptocurrency, we make transaction simple and secure.
                  </p>
                </div>

                <div className="first_section">
                  <div className="icon_section last_icon">
                  <img src={user} alt="users icon" width={25}/>
                  <h4>Direct connections</h4>
                  </div>
                  <p className="text_section">
                  We connect you directly with landlords, giving you more control and transparency in rental process.
                  </p>
                </div>
              </div>
            </div>
          </div> 
        </div>
      
      <div className="image-container">
         {/* Image */}
          <img
            src={first_of_all}
            alt="first of all imag"
            className="background-image"
          />
           {/* Overlay text (First of all) */}
          <div className="overlay-text">
          <img src={newlist} alt="users icon" width={15}/>
            <span>New listed</span>
          </div>
      </div>
      </div>
  </div>
    </>
  )
}

export default About