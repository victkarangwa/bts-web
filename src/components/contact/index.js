import React, { Component, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  TextField,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { connect } from 'react-redux';
import {sendMessage} from '../../redux/actions/contactActions'
import { Helmet } from 'react-helmet';


  const useStyles = makeStyles((theme) => ({
    TextField: {
      width: '500px',
      fontSize: '15px',
      backgroundColor: '#fff',
      '@media (max-width:780px)': {
        width: '300px',
      },
    },
    textarea: {
      width: '476px',
      fontSize: '15px',
      border: '1px solid #C4C4C4',
      padding: '12px',
      '@media (max-width:780px)': {
        width: '275px',
      },
      borderRadius: '5px',
      outline: 'none'
    },
    sendButton: {
      background: '#f86f2d',
      border: '1px solid #f86f2d',
      color: '#fff',
      '&:hover': {
        background: 'black',
        border: '1px solid black',
      },
      '@media (max-width:780px)': {
        marginLeft: '20%',
        marginBottom: '3%',
      },
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));


const Contact = ({ sendMessage }) => {
  const classes = useStyles();

  const [OpenBackdrop, setOpenBackdrop] = useState(false);
    const [userRequest, setuserRequest] = useState({
      names: '',
      email: '',
      subject:'',
      message: '',
    });

  const handleSend = async () => {
    setOpenBackdrop(true);
    await sendMessage(userRequest);
      setOpenBackdrop(false);
  
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      switch (name) {
        case 'names':
          setuserRequest({ ...userRequest, names: value });
          break;
        case 'email':
          setuserRequest({ ...userRequest, email: value });
          break;
        case 'subject':
          setuserRequest({ ...userRequest, subject: value });
          break;
        case 'message':
          setuserRequest({ ...userRequest, message: value });
          break;

        default:
          break;
      }
    };


  return (
    <div className='page-container'>
      <Header />
      <Helmet>
        <title>Contact us - BTS</title>
      </Helmet>
      <div className='contact-page-container'>
        <div className='header-image-container'>
          <h4>Contact us</h4>
        </div>
        <div className='main-page'>
          <div class='form-section'>
            <div className='section-bolder'>
              <div>
                <p className='center-txt'>
                  Do you have a question or suggestion ?
                </p>
              </div>
              <div>
                <form>
                  <TextField
                    id='outlined-secondary'
                    label='Your name'
                    variant='outlined'
                    className={classes.TextField}
                    name='names'
                    onChange={handleChange}
                    autoComplete='off'
                  />
                  <Box m={1} />
                  <TextField
                    id='outlined-secondary'
                    label='Your email'
                    variant='outlined'
                    className={classes.TextField}
                    name='email'
                    onChange={handleChange}
                    autoComplete='off'
                  />
                  <Box m={1} />
                  <TextField
                    id='outlined-secondary'
                    label='Subject'
                    variant='outlined'
                    className={classes.TextField}
                    name='subject'
                    onChange={handleChange}
                    autoComplete='off'
                  />
                  <Box m={1} />
                  <TextareaAutosize
                    rowsMin={13}
                    placeholder='Message'
                    className={classes.textarea}
                    name='message'
                    onChange={handleChange}
                    autoComplete='off'
                  />
                  <Box m={1} />
                  <Button className={classes.sendButton} onClick={handleSend}>
                    send message
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className='contact-section'>
            <Grid container direction='column'>
              <Grid item>
                <div className='contact-section-title'>
                  <p>Contact Information</p>
                </div>
              </Grid>
              <Grid item>
                <div className='contact-information'>
                  <div className='contact-info'>
                    <div className='contact-title'>Address:</div>
                    <div className='addres-info'>KG 548 st</div>
                  </div>
                  <div className='contact-info'>
                    <div className='contact-title'>Phone:</div>
                    <div className='addres-info2'>+250785571790</div>
                  </div>
                  <div className='contact-info'>
                    <div className='contact-title'>Email:</div>
                    <div className='addres-info2'>info@bts.org</div>
                  </div>
                  <div className='contact-info'>
                    <div className='contact-title'>Website:</div>
                    <div className='addres-info2'>www.bts.org</div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      <Backdrop className={classes.backdrop} open={OpenBackdrop}>
        <CircularProgress color='inherit' />
      </Backdrop>
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    modal: state.message,
  };
};

export default connect(mapStateToProps, { sendMessage })(Contact);
