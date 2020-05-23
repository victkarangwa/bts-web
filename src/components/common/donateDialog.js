import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  TextField,
  Dialog,
  Button,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SendIcon from '@material-ui/icons/Send';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../../assets/styles/style.scss';
import Alert from '@material-ui/lab/Alert';
import { donateModal } from '../../redux/actions/modalActions';
import { sendDonation } from '../../redux/actions/donateAction';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(0),
    fontSize: 20,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
  dialogText: {
    textAlign: 'center',
  },

  buttonGroup: {
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#e68b4c',
    '&:hover': {
      backgroundColor: '#343434',
    },
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  multilineField: {
    width: '98%',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Donate = ({ donateModal, sendDonation }) => {
  const classes = useStyles();
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleModal = () => {
    donateModal(false);
  };

  const [OpenBackdrop, setOpenBackdrop] = React.useState(false);
  const [openAlert, setopenAlert] = useState(false);
  const [userRequest, setuUserRequest] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    pledge: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'firstName':
        setuUserRequest({ ...userRequest, firstName: value });
        break;
      case 'lastName':
        setuUserRequest({ ...userRequest, lastName: value });
        break;
      case 'email':
        setuUserRequest({ ...userRequest, email: value });
        break;
      case 'phone':
        setuUserRequest({ ...userRequest, phone: value });
        break;
      case 'pledge':
        setuUserRequest({ ...userRequest, pledge: value });
        break;
      case 'country':
        setuUserRequest({ ...userRequest, country: value });
        break;

      default:
        break;
    }
  };

  const handleClose = () => {
    setOpenBackdrop(false);
  };

  const handleSend = async () => {
    setOpenBackdrop(true);
    await sendDonation(userRequest);
    handleClose();
  };

  return (
    <React.Fragment>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={true}
        onClose={handleModal}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle
          id='max-width-dialog-title'
          className={classes.dialogHeading}
        >
          Donation
        </DialogTitle>
        <DialogContent>
          <form className={classes.root} noValidate autoComplete='off'>
            <TextField
              id='standard-basic'
              variant='outlined'
              label='First name'
              className={classes.multilineField}
              name='firstName'
              onChange={handleChange}
            />
            <TextField
              id='standard-basic'
              variant='outlined'
              label='Last name'
              className={classes.multilineField}
              name='lastName'
              onChange={handleChange}
            />
            <TextField
              id='standard-basic'
              variant='outlined'
              label='Email Contact'
              className={classes.multilineField}
              name='email'
              onChange={handleChange}
            />
            <TextField
              id='standard-basic'
              variant='outlined'
              label='Phone'
              className={classes.multilineField}
              name='phone'
              onChange={handleChange}
            />
            <TextField
              id='standard-basic'
              variant='outlined'
              label='Pledge (Optional)'
              className={classes.multilineField}
              name='pledge'
              onChange={handleChange}
            />
            <TextField
              id='standard-basic'
              variant='outlined'
              label='Country'
              className={classes.multilineField}
              name='country'
              onChange={handleChange}
            />
            <Button
              variant='contained'
              color='primary'
              className={classes.button}
              startIcon={<SendIcon />}
              onClick={handleSend}
            >
              Send
            </Button>
          </form>
        </DialogContent>
        <DialogActions className={classes.closeButton}>
          <Button
            className={classes.closeButton}
            onClick={() => handleModal()}
            color='primary'
          >
            &times;
          </Button>
        </DialogActions>

        <div className='modal-styled-body'>
          <a href='https://twitter.com/BTS_Rwanda' target='_blank'>
            Twitter
          </a>
          <a href='https://www.linkedin.com/company/bts-rwanda' target='_blank'>
            LinkedIn
          </a>
          <a href='http://www.facebook.com/BTSRwanda' target='_blank'>
            Facebook
          </a>
        </div>
        <Backdrop
          className={classes.backdrop}
          open={OpenBackdrop}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      </Dialog>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    modal: state.Modals,
  };
};

export default connect(mapStateToProps, { donateModal, sendDonation })(Donate);
