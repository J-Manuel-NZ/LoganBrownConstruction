import '../pages/index.css'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/assets/lbc_logo.png'
import '../../node_modules/animate.css/animate.css'

const Navbar = ({page}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // need to add a menu for the desktop view here **
    // -------------------------------------
    // **
      <div className="navbar">
        <a href='/'><img src={logo} alt="Logan Brown Construction Logo" /></a>

        <ul className="navbar-bar hidden lg:flex animate__animated animate__fadeInDown" onClick={() => setIsMenuOpen(false)}>
                {page === 'home'
                ? <li className='navbar-menu_item menu-active'><a href='/'>Home</a></li>
                : <li className='navbar-menu_item'><a href='/'>Home</a></li>
                }
                {page === 'd&b'
                ? <li className='navbar-menu_item menu-active'><a href='/design&build'>Design & Build</a></li>
                : <li className='navbar-menu_item'><a href='/design&build'>Design & Build</a></li>
                }
                {page === 'renovations'
                ? <li className='navbar-menu_item menu-active'><a href='/renovations'>Renovations</a></li>
                : <li className='navbar-menu_item'><a href='/renovations'>Renovations</a></li>
                }
                {page === 'landscaping'
                ? <li className='navbar-menu_item menu-active'><a href='/landscaping'>Landscaping</a></li>
                : <li className='navbar-menu_item'><a href='/landscaping'>Landscaping</a></li>
                }
                {page === 'recentwork'
                ? <li className='navbar-menu_item menu-active'><a href='/recentwork'>Recent Work</a></li>
                : <li className='navbar-menu_item'><a href='/recentwork'>Recent Work</a></li>
                }
                {page === 'about'
                ? <li className='navbar-menu_item menu-active'><a href='/about'>About</a></li>
                : <li className='navbar-menu_item'><a href='/about'>About</a></li>
                }
                {page === 'contact'
                ? <li className='navbar-menu_item menu-active'><a href='/contact'>Contact</a></li>
                : <li className='navbar-menu_item'><a href='/contact'>Contact</a></li>
                }
                  
                  {/* <li className='navbar-menu_item'><a href='/design&build'>Design & Build</a></li>
                  <li className='navbar-menu_item'><a href='/renovations'>Renovations</a></li>
                  <li className='navbar-menu_item'><a href='/landscaping'>Landscaping</a></li>
                  <li className='navbar-menu_item'><a href='/recentwork'>Recent Work</a></li>
                  <li className='navbar-menu_item'><a href='/about'>About</a></li>
                  <li className='navbar-menu_item'><a href='/contact'>Contact</a></li> */}
              </ul>

          {isMenuOpen ? (
              <FontAwesomeIcon
                  icon={faXmark}
                  alt="Close Icon"
                  onClick={() => setIsMenuOpen(false)}
                  className='navbar-icon fixed'
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
              <ul className="navbar-menu animate__animated animate__fadeInDown" onClick={() => setIsMenuOpen(false)}>
                {page === 'home'
                ? <li className='navbar-menu_item menu-active'><a href='/'>Home</a></li>
                : <li className='navbar-menu_item'><a href='/'>Home</a></li>
                }
                {page === 'd&b'
                ? <li className='navbar-menu_item menu-active'><a href='/design&build'>Design & Build</a></li>
                : <li className='navbar-menu_item'><a href='/design&build'>Design & Build</a></li>
                }
                {page === 'renovations'
                ? <li className='navbar-menu_item menu-active'><a href='/renovations'>Renovations</a></li>
                : <li className='navbar-menu_item'><a href='/renovations'>Renovations</a></li>
                }
                {page === 'landscaping'
                ? <li className='navbar-menu_item menu-active'><a href='/landscaping'>Landscaping</a></li>
                : <li className='navbar-menu_item'><a href='/landscaping'>Landscaping</a></li>
                }
                {page === 'recentwork'
                ? <li className='navbar-menu_item menu-active'><a href='/recentwork'>Recent Work</a></li>
                : <li className='navbar-menu_item'><a href='/recentwork'>Recent Work</a></li>
                }
                {page === 'about'
                ? <li className='navbar-menu_item menu-active'><a href='/about'>About</a></li>
                : <li className='navbar-menu_item'><a href='/about'>About</a></li>
                }
                {page === 'contact'
                ? <li className='navbar-menu_item menu-active'><a href='/contact'>Contact</a></li>
                : <li className='navbar-menu_item'><a href='/contact'>Contact</a></li>
                }
                  
                  {/* <li className='navbar-menu_item'><a href='/design&build'>Design & Build</a></li>
                  <li className='navbar-menu_item'><a href='/renovations'>Renovations</a></li>
                  <li className='navbar-menu_item'><a href='/landscaping'>Landscaping</a></li>
                  <li className='navbar-menu_item'><a href='/recentwork'>Recent Work</a></li>
                  <li className='navbar-menu_item'><a href='/about'>About</a></li>
                  <li className='navbar-menu_item'><a href='/contact'>Contact</a></li> */}
              </ul>
          )}
      </div>
  );
}

export default Navbar