import '../pages/index.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/assets/lbc_logo.jpg'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // need to add a menu for the desktop view here **
    // -------------------------------------
    // **
      <div className="navbar">
        <img src={logo} alt="Logan Brown Construction Logo" />
          {isMenuOpen ? (
              <FontAwesomeIcon
                  icon={faXmark}
                  alt="Close Icon"
                  onClick={() => setIsMenuOpen(false)}
                  className='navbar-icon'
              />
          ) : (
              <FontAwesomeIcon
                  icon={faBars}
                  alt="Menu Icon"
                  onClick={() => setIsMenuOpen(true)}
                  className='navbar-icon'
              />
          )}
          {isMenuOpen && (
              <ul className="navbar-menu" onClick={() => setIsMenuOpen(false)}>
                  <li className='navbar-menu_item'><a href='/'>Home</a></li>
                  <li className='navbar-menu_item'><a href='/design&build'>Design & Build</a></li>
                  <li className='navbar-menu_item'><a href='/renovations'>Renovations</a></li>
                  <li className='navbar-menu_item'><a href='/landscaping'>Landscaping</a></li>
                  <li className='navbar-menu_item'><a href='/recentwork'>Recent Work</a></li>
                  <li className='navbar-menu_item'><a href='/about'>About</a></li>
                  <li className='navbar-menu_item'><a href='/contact'>Contact</a></li>
              </ul>
          )}
      </div>
  );
}

export default Navbar