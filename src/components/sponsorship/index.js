import React from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import {
  makeStyles,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  CircularProgress,
  Backdrop,
} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InfoRounded from '@material-ui/icons/InfoRounded';
import PersonPin from '@material-ui/icons/PersonPin';
import SendIcon from '@material-ui/icons/SendRounded';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { becomeSponsor } from '../../redux/actions/memberAction';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '600px',
    height: '600px',
    backgroundColor: theme.palette.background.paper,
    margin: '0 auto',
    marginTop: '40px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100vh',
      margin: '0 auto',
    },
  },
  formControl: {
    width: '500px',
    margin: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '15px 0',
    },
  },
  TextField: {
    margin: theme.spacing(3),
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '15px 0',
    },
  },
  checkBox: {
    margin: '30px 0 !important',
    '&$checked': {
      color: '#343434 !important',
    },
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '15px 0',
    },
  },
  appBtn: {
    fontSize: 13,
    marginLeft: '30px',
    backgroundColor: '#e68b4c',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#343434',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      margin: '15px 0',
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  appBar: {
      alignItems: 'center',
  },
}));
const Index = ({ becomeSponsor }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [OpenBackdrop, setOpenBackdrop] = React.useState(false);
  const [userRequest, setuserRequest] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    comment: '',
  });
  const handleClose = () => {
    setOpenBackdrop(false);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'firstName':
        setuserRequest({ ...userRequest, firstName: value });
        break;
      case 'lastName':
        setuserRequest({ ...userRequest, lastName: value });
        break;
      case 'email':
        setuserRequest({ ...userRequest, email: value });
        break;
      case 'phone':
        setuserRequest({ ...userRequest, phone: value });
        break;
      case 'address':
        setuserRequest({ ...userRequest, address: value });
        break;
      case 'country':
        setuserRequest({ ...userRequest, country: value });
        break;
      case 'comment':
        setuserRequest({ ...userRequest, comment: value });
        break;

      default:
        break;
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = () => {
    setOpenBackdrop(true);
    becomeSponsor(userRequest);
    handleClose();
  };

  return (
    <div>
      <div className='page-container'>
        <Header />
        <Helmet>
          <title>Become a Sponsor - BTS</title>
          <meta
            name='description'
            content='Join us in creating more compassionate, loving and caring society in our country and the whole of Africa'
            data-react-helmet='true'
          />
        </Helmet>
        <div className='sponsership-form'>
          <h3 className='center-txt upper-txt'>Become a sponsor</h3>
          <div className={classes.root}>
            <AppBar
              className={classes.appBar}
              position='static'
              color='default'
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant='scrollable'
                scrollButtons='on'
                indicatorColor='primary'
                textColor='primary'
                aria-label='scrollable force tabs example'
              >
                <Tab
                  label='Step one'
                  icon={<InfoRounded />}
                  {...a11yProps(0)}
                />
                <Tab label='Submit' icon={<SendIcon />} {...a11yProps(1)} />
              </Tabs>
            </AppBar>
            <TabPanel className='tabbed-info' value={value} index={0}>
              <TextField
                id='outlined-secondary'
                label='First name'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='firstName'
                value={userRequest.firstName || ''}
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Last name'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='lastName'
                value={userRequest.lastName || ''}
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Email'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='email'
                value={userRequest.email || ''}
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Phone'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='phone'
                value={userRequest.phone || ''}
              />
              <Button
                variant='contained'
                color='secondary'
                className={classes.appBtn}
                size='large'
                onClick={(e) => {
                  handleChange(e, 1);
                }}
              >
                Next
              </Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Address'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='address'
                value={userRequest.address || ''}
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Country'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='country'
                value={userRequest.country || ''}
              />
              <TextField
                id='outlined-secondary'
                label='Comment(optional)'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='comment'
                value={userRequest.comment || ''}
                multiline
                rows={4}
              />
              <Button
                variant='contained'
                color='secondary'
                className={classes.appBtn}
                size='large'
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </TabPanel>
          </div>
        </div>
        <Backdrop className={classes.backdrop} open={OpenBackdrop}>
          <CircularProgress color='inherit' />
        </Backdrop>
        <Footer />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    sponsorship: state.membership,
  };
};
export default connect(mapStateToProps, { becomeSponsor })(Index);
