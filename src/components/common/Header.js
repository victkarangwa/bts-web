import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/style.scss'



const Header = () => {

  return (
    <>
      <div className='header-section'>
        <div className='nav-logo'>BTS</div>
        <div className='nav-menu'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About us</Link>
            </li>
            <li>
              <Link to='/events'>Events</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};


export default Header;
