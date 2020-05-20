import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {useStyles} from '../../assets/styles/contact';
import Button from '@material-ui/core/Button';
import Header from '../common/Header';
import Footer from '../common/Footer';
class Contact extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className='page-container'>
        <Header/>
      <div className="contact-page-container">
        <div className="header-image-container">
          <h4>Contact us</h4>
        </div>
        <div className="main-page">
        <div class="form-section">
          <div>
            <p>Do you have a question or suggestion ?</p>
          </div>
          <div>
            <form>
              <TextField
                id="outlined-secondary"
                label="Your name"
                variant="outlined"
                className={classes.TextField}
              />
              <Box m={1} />
              <TextField
                id="outlined-secondary"
                label="Your email"
                variant="outlined"
                className={classes.TextField}
              />
               <Box m={1} />
                <TextField
                id="outlined-secondary"
                label="Subject"
                variant="outlined"
                className={classes.TextField}
                
              />
              <Box m={1} />
              <TextareaAutosize rowsMin={13} placeholder="Message" className={classes.textarea} />
              <Box m={1}/>
              <Button className={classes.sendButton}>send message</Button>
            </form>
          </div>
        </div>
        <div className="contact-section">
          <Grid container direction="column">
            <Grid item>
              <div className="contact-section-title">
                <p>Contact Information</p>
              </div>
            </Grid>
            <Grid item>
              <div className="contact-information">
                <div className="contact-info">
                  <div className="contact-title">Address:</div>
                  <div className="addres-info">KG 548 st</div>
                </div>
                <div className="contact-info">
                  <div className="contact-title">Phone:</div>
                  <div className="addres-info2">+250785571790</div>
                </div>
                <div className="contact-info">
                  <div className="contact-title">Email:</div>
                  <div className="addres-info2">info@bts.org</div>
                </div>
                <div className="contact-info">
                  <div className="contact-title">Website:</div>
                  <div className="addres-info2">www.bts.org</div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
        </div>
      </div>
      <Footer/>
      </div>
    );
  }
}

export default (withStyles(useStyles)(Contact))
;
