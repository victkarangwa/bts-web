import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "../../assets/styles/about.js";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import joxy from "../../assets/images/Joxy.png";
import groupPhoto from "../../assets/images/group.png";
import Header from "../common/Header"
import Footer from "../common/Footer"
import DonationModal from '../common/donateDialog';
class About extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className='page-container'>
        <Header />
        <DonationModal/>
        <div className='about-page'>
          <div className='about-header'>
            <div className='about-txt-title'>
              <h3>About born to be solutions</h3>
            </div>
            <div className='about-txt-title'>
              <p>
                <b> WE ARE </b>non governmental organization , aiming at
                providing sustainable support to the needy people
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
                  Neither the markets nor aid alone can solve the problems of
                  poverty. More than two billion people around the world lack
                  access to basic goods and services—from clean water and
                  electricity to an education and the freedom to participate in
                  the economy. We’re here to change that. Our vision is a world
                </p>
              </div>
            </div>
            <div className='story-section-container-avatar'>
              <img
                src={groupPhoto}
                alt=''
                className='story-right-section-item'
              />
            </div>
          </div>
          <Box m={3} />
          <div className='card-container'>
            <div className='card1'>
              <h6>Served over</h6>

              <p>600</p>

              <p>Childrens and families from Rwanda</p>
            </div>

            <div className='card2'>
              <h6>Donate money</h6>

              <p>You can make one person happy </p>

              <Button className={classes.button}>donate now</Button>
            </div>

            <div className='card3'>
              <h6>Be a volunteer</h6>

              <p>You can make one person happy</p>

              <Button className={classes.button}>Be a volunteer</Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(useStyles)(About);
