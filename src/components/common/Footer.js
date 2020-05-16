import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () =>{

return (
  <div className='footer-section'>
    <div className='info-section'>
      <div className='footer-sub-section'>
        <h2>Our Mission</h2>
        <div className='sub-details'>
          To create solutions to society's problems rooting poverty and
          disharmony through education, job creation ,sustainable support to the
          needy and mentorship in order to change people's lives to goodness.
          in.
        </div>
      </div>
      <div className='footer-sub-section'>
        <h2>Quick links</h2>
        <div className='sub-details'>
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
      <div className='footer-sub-section'>
        <h2>Contact</h2>
        <div className='sub-details'>
          <label className='sub-header'>Head Office</label>
          <p>KK 204 st KIgali Rwanda</p>
          <label className='sub-header'>Phone</label>
          <p>+250 789 152 190</p>
          <p>+250 789 095 871</p>
          <label className='sub-header'>Email</label>
          <p>info@btsrwanda.com</p>
        </div>
      </div>
    </div>
    <label>Copyright &copy; 2020 BTS</label>
  </div>
);

}

export default Footer;
