import React from 'react'
import './About.css'
// import { FaCircle } from 'react-icons/fa';
import first_of_all from '../../Asset/First_of_all.png'
import reviews from '../../Asset/review.png'
import user from '../../Asset/user.png'
import signup from '../../Asset/signup.png'

const About = () => {
  return (
    <>
    <div className='about_spacing'>
      <div className="about">
        <div className='icons'>
          <div className="icons_tags">
            <div className="top_section">
              <div className='top_section_sub'>
                <img src={signup} alt="signup icon" width={40} />
                <h3>48 Signups</h3>
              </div>
              <div className="text_section">
              Seperated that they don't live in Bookmarkgrove and they lives in marked.
              Seperated that they don't live in Bookmarkgrove and they lives in marked.
              </div>
            </div>
            {/* second section */}

            {/* flex scton */}
            <div className="second_section">
              <div className="flex_second_section">
                <div className="first_section">
                  <div className="icon_section">
                  <img src={reviews} alt="review icon" width={40}  />
                  <h3>48%</h3>
                  </div>
                  <div className="text_section">
                  Seperated that they don't live in Bookmarkgrove and they lives in marked.
                  </div>
                </div>

                <div className="first_section">
                  <div className="icon_section">
                  <img src={user} alt="users icon" width={40}/>
                  <h3>50 Users</h3>
                  </div>
                  <div className="text_section">
                  Seperated that they don't live in Bookmarkgrove and they lives in marked.
                  </div>
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
            <span>First of all</span>
          </div>
      </div>
      </div>
  </div>
    </>
  )
}

export default About