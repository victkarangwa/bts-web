import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/style.scss'



const Header = () => {
  const [navDrawer, setnavDrawer] = useState(0);
const openNav = () =>{
setnavDrawer(!navDrawer);
}

  return (
    <>
      <div className='header-section'>
        <div className='nav-drawer-icon'>
          <span onClick={openNav} class='openbtn'>
            &#9776;
          </span>
        </div>
        <div className='nav-logo'>
          <Link to='/'>BTS</Link>
        </div>
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
            <li className='important-txt'>
              <Link to='/membership/apply'>Be one of us</Link>
            </li>
            <li className='important-txt'>
              <Link to='/sponsorship/apply'>Become a sponsor</Link>
            </li>
          </ul>
        </div>
      </div>
      {navDrawer ? (
        <div className='mobile-nav'>
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
              <li className='important-txt'>
                <Link to='/membership/apply'>Be one of us</Link>
              </li>
              <li className='important-txt'>
                <Link to='/sponsorship/apply'>Become a sponsor</Link>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};


export default Header;
