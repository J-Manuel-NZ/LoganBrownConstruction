import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // need to add a menu for the desktop view here **
    // -------------------------------------
    // **
      <div className="">
          {isMenuOpen ? (
              <FontAwesomeIcon
                  icon={faXmark}
                  alt="Close Icon"
                  onClick={() => setIsMenuOpen(false)}
              />
          ) : (
              <FontAwesomeIcon
                  icon={faBars}
                  alt="Menu Icon"
                  onClick={() => setIsMenuOpen(true)}
              />
          )}
          {isMenuOpen && (
              <ul className="">
                  <li>one</li>
                  <li>two</li>
                  <li>three</li>
              </ul>
          )}
      </div>
  );
}

export default Navbar