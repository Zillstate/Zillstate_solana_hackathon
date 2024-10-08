import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'; 
import rent from '../../Asset/Rent.png'
import reseach from '../../Asset/Research.png'
import First from '../../Component/First/First.js'
import About from '../../Component/About/About.js'
import Research from '../../Component/Research/Research.js'
import Appp from '../../Component/Appp/Appp.js'


const Hero = () => {
  return (
    <>
    <div className="hero">
  {/* the reserach aspect og the page */}
      <div className="research">
        <h4>SOLANA INTERGRATED</h4>
        <h2>3.4s average speed</h2>
        <p>Zillstate is revolutionizing the rental <br />experiences by connecting home searchers <br />directly to landlords</p>
            {/* Use Link to make the Sign up button navigate */}
        <Link to="/zill_sign">
            <button className='btn_signup'>Sign up</button>
          </Link>
        <div className='research_img'>
          <img src={reseach} 
          alt="search for home"
          width={400} 
          height={400}
          />
        </div>
      </div>
      {/* the rent aspecct of the page */}
      <div className="rent">
        <h1>Rent your new home from <br /> any where fast and easy </h1>
       <div className='rent_img'>
       <img src={rent} 
        alt="Rent your new home"
        width={700} />
       </div>
      </div>


    </div>
    <First/>
     <About/>
    <Research/>
    <Appp/>  
    </>
  )
}

export default Hero
