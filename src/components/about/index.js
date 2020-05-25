import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import joxy from "../../assets/images/Joxy.png";
import groupPhoto from "../../assets/images/group.png";
import Header from "../common/Header"
import Footer from "../common/Footer"
import DonateDialog from '../common/donateDialog';
import { connect } from 'react-redux';
import { donateModal } from '../../redux/actions/modalActions';
import { Helmet } from 'react-helmet';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: '#D08A51',
    color: 'white',
    '&:hover': {
      background: 'black',
      border: '1px solid black',
    },
  },
}));

const About = ({ donateModal, modal }) => {
  const classes = useStyles();
    const openDonateModal = () => {
      donateModal(true);
    };
  return (
    <div className='page-container'>
      <Header />
      <Helmet>
        <title>About us - BTS</title>
      </Helmet>
      {modal.donateModal && <DonateDialog />}
      <div className='about-page'>
        <div className='about-header'>
          <div className='about-txt-title'>
            <h3>About born to be solutions</h3>
          </div>
          <div className='about-txt-title'>
            <p>
              <b> WE ARE </b>non governmental organization , aiming at providing
              sustainable support to the needy people
            </p>
          </div>
        </div>
        <Box m={3} />
        <div className='mission-section'>
          <div className='mission-section-container-avatar'>
            <img src={joxy} alt='' className='mission-left-section-item' />
          </div>

          <div className='mission-section-txt-container'>
            <div className='mission-section-txt'>
              <h3>OUR VISION AND MISSION</h3>
            </div>
            <div className='mission-section-txt'>
              <p>
                <b>VISION</b> of creating a world where everyone has access to
                basic needs.
                <Box m={1} />
                <b>MISSION</b> of raising well being and descent standard of
                life of people through sustainable support, advocation and
                satisfaction of their basic needs.
              </p>
            </div>
          </div>
        </div>
        <div className='story-section'>
          <div className='story-section-txt-container'>
            <div className='story-section-txt'>
              <h3>OUR STORY</h3>
            </div>
            <div className='story-section-txt'>
              <p>
              We have seen people not able to meet their basic needs, street kids, school dropouts due to poverty. 
              Famine, clothing, and shelter troubles them. Our experience while at Nyagatare secondary school made us decide to put our efforts together
               and change lives of these people. This Idea started with Deo Niyonkuru, Maurice Haragirimana and John Mugiraneza in 2017.
              </p>
            </div>
          </div>
          <div className='story-section-container-avatar'>
            <img src={groupPhoto} alt='' className='story-right-section-item' />
          </div>
        </div>
        <Box m={3} />
        <div className='card-container'>
          <div className='card1'>
            <h6 className='headings'>Served over</h6>

            <p className='txt-lg'>600</p>

            <p>Childrens and families from Rwanda</p>
          </div>

          <div className='card2'>
            <h6 className='headings'>Donate money</h6>

            <p>You can make one person happy </p>

            <Button onClick={openDonateModal} className={classes.button}>
              donate now
            </Button>
          </div>

          <div className='card3'>
            <h6 className='headings'>Become a member</h6>

            <p>You can make one person happy</p>

            <Button href='/membership/apply' className={classes.button}>
              Become a member
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.Modals,
  };
};
export default connect(mapStateToProps, { donateModal })(About);
