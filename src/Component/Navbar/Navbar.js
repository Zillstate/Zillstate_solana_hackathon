import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../Asset/zillstate_logo.png'


const Navbar = () => {

  const data =[
    {
      id: 1,
      title:'Zillstate',
      url : '/'
    },
  
    {
      id: 2,
      title:'Research',
      url : '/research'
    },
    {
      id: 3,
      title:'Project',
      url : '/project'
    },
  
    {
      id: 4,
      title:'About',
      url : '/about us'
    },
  
    {
      id: 5,
      title:'FAQ',
      url : '/faq'
    },
    {
      id: 6,
      title:'APP',
      url : '/app'
    },
  
  
  ]

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () =>{setIsMenuOpen(!isMenuOpen)}

  return (
   <>
     <header className= {`navbar ${isMenuOpen ? 'nav-open' : ''}`}>
      <div className='main_zillate'>
      <div className='zillstate_logo'>
        <img src={logo}
         alt="Zillstate logo"
         width={55} />
      </div>
      <nav>
        <ul>
         {data.map(({id, url, title})=>(
          <li key={id}>
            {<Link
             to={url}
             onClick={toggleMenu} >{title}</Link>}
          </li>
         ))}
        </ul>
      </nav>
      </div>
      <div>
          {/* Add the Link component for Sign up button */}
      <Link to="/Zill_Sign">
            <button className='btn'>Sign up</button>
          </Link>
      </div>
      <div className='hamburger' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
    </header>
   </>
  )
}

export default Navbar