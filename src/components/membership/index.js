import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import PropTypes from 'prop-types';
import {
  makeStyles,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
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
}));
const Index = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [checked, setChecked] = React.useState(true);
  const [userRequest, setuserRequest] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    occupation: '',
    nid: '',
    dob: '',
    reason: '',
    gotFrom: '',
  });
    const handleInput = (e) => {
      const { name, value } = e.target;
      console.log('======.', value);
      
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
        case 'occupation':
          setuserRequest({ ...userRequest, occupation: value });
          break;
        case 'nid':
          setuserRequest({ ...userRequest, nid: value });
          break;
        case 'dob':
          setuserRequest({ ...userRequest, dob: value });
          break;
        case 'reason':
          setuserRequest({ ...userRequest, reason: value });
          break;
        case 'gotFrom':
          setuserRequest({ ...userRequest, gotFrom: value });
          break;

        default:
          break;
      }
    };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = () =>{
      console.log(userRequest);
      
  }

  return (
    <div>
      <div className='page-container'>
        <Header />
        <div className='membership-form'>
          <div className={classes.root}>
            <AppBar position='static' color='default'>
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
                <Tab label='Step two' icon={<PersonPin />} {...a11yProps(1)} />
                <Tab label='Apply' icon={<SendIcon />} {...a11yProps(2)} />
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
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Last name'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='lastName'
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Email'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='email'
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Phone'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='phone'
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
              <TextField
                id='outlined-secondary'
                label='Date of birth'
                variant='outlined'
                type='date'
                defaultValue='2000-01-01'
                className={classes.TextField}
                onChange={handleInput}
                name='dob'
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='National ID'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='nid'
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Address'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='address'
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Country'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='country'
              />
              <Button
                variant='contained'
                color='secondary'
                className={classes.appBtn}
                size='large'
                onClick={(e) => {
                  handleChange(e, 2);
                }}
              >
                Next
              </Button>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <TextField
                id='outlined-secondary'
                label='Occupation'
                variant='outlined'
                className={classes.TextField}
                onChange={handleInput}
                name='occupation'
              />
              <Box m={1} />
              <TextField
                id='outlined-secondary'
                label='Reason'
                variant='outlined'
                multiline
                className={classes.TextField}
                onChange={handleInput}
                name='reason'
              />
              <Box m={1} />
              <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel id='demo-simple-select-outlined-label'>
                  How did you hear about us
                </InputLabel>
                <Select
                  labelId='demo-simple-select-outlined-label'
                  id='demo-simple-select-outlined'
                  onChange={handleInput}
                  label='How did you hear about us'
                  name='gotFrom'
                >
                  <MenuItem value=''>
                    <em>Other</em>
                  </MenuItem>
                  <MenuItem value={10}>Facebook</MenuItem>
                  <MenuItem value={20}>Twitter</MenuItem>
                  <MenuItem value={30}>Youtube</MenuItem>
                  <MenuItem value={30}>Instagram</MenuItem>
                  <MenuItem value={30}>Linkedin</MenuItem>
                  <MenuItem value={30}>Radio</MenuItem>
                  <MenuItem value={30}>TV</MenuItem>
                  <MenuItem value={30}>Search Engine</MenuItem>
                  <MenuItem value={30}>Friends</MenuItem>
                </Select>
                <FormControlLabel
                  value='end'
                  control={<Checkbox color='primary' />}
                  label='Check here to indicate that you have read and agree to the terms of BTS'
                  labelPlacement='end'
                  className={classes.checkBox}
                />
              </FormControl>
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

        <Footer />
      </div>
    </div>
  );
};
export default Index;
