import React from 'react';
import '../../assets/styles/style.scss'



const Header = () => {

  return (
    <>
      <div className='header-section'>
        <div className='nav-logo'>BTS</div>
        <div className='nav-menu'>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#news'>About us</a>
            </li>
            <li>
              <a href='#contact'>Events</a>
            </li>
            <li>
              <a href='#about'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};


export default Header;
