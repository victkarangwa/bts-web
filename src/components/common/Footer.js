import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import FbIcon from '@material-ui/icons/Facebook';
import TwIcon from '@material-ui/icons/Twitter';
import IgIcon from '@material-ui/icons/Instagram';
import YtIcon from '@material-ui/icons/YouTube';
import InIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(0),
      color: '#a0a0a0 !important',
    },
  },
})); 
const Footer = () =>{
const classes = useStyles();
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
        <div className={classes.root}>
          <IconButton
            aria-label='facebook'
            target='_blank'
            href='https://web.facebook.com/BTSRwanda/'
          >
            <FbIcon />
          </IconButton>
          <IconButton
            aria-label='youtube'
            target='_blank'
            href='https://www.youtube.com/channel/UCcGJj55VihGH-arWOev4dDw'
          >
            <YtIcon />
          </IconButton>
          <IconButton
            aria-label='instagram'
            target='_blank'
            href='https://www.instagram.com/bts_rwanda/'
          >
            <IgIcon />
          </IconButton>
          <IconButton
            aria-label='twitter'
            target='_blank'
            href='https://twitter.com/BTS_Rwanda'
          >
            <TwIcon />
          </IconButton>
          <IconButton
            aria-label='linkedin'
            target='_blank'
            href='https://www.linkedin.com/company/bts-rwanda'
          >
            <InIcon />
          </IconButton>
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
          <p>+250 784 695 664</p>
          <p>+250 785 571 790</p>
          <label className='sub-header'>Email</label>
          <p>info@btsrwanda.org</p>
        </div>
      </div>
    </div>
    <div className='copy-section'>
      <label>Copyright &copy; 2020 BTS</label>
    </div>
  </div>
);

}

export default Footer;
