import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Button, makeStyles } from '@material-ui/core';
import userPhoto from '../../assets/images/victor-img.jpeg';
import userPic from '../../assets/images/jox.jpg';
import childrenPic from '../../assets/images/children.jpg';
import johnPic from '../../assets/images/john.jpeg';
import fabPic from '../../assets/images/fab.jpeg';
import arsenePic from '../../assets/images/arsene.jpeg';
import bonfilsPic from '../../assets/images/bonfils.jpeg';
import buildHousePic from '../../assets/images/4.jpg';
import heartIcon from '../../assets/images/heartIcon.png';
import LoveIcon from '../../assets/images/loveIcon.png';
import volunteerIcon from '../../assets/images/volunteerIcon.png';
import handshakeIcon from '../../assets/images/handshakeIcon.png';
import DonateDialog from '../common/donateDialog';
import { donateModal } from '../../redux/actions/modalActions';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontSize: 13,
    borderColor: '#4182ff',
    color: '#4182ff',
    '&:hover': {
      borderColor: '#e68b4c',
      color: '#e68b4c',
    },
  },
  appBtn: {
    fontSize: 13,
    backgroundColor: '#e68b4c',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#343434',
    },
  },
}));
const Index = ({ donateModal, modal }) => {
  const classes = useStyles();

  const openDonateModal = () => {
    donateModal(true);
  };
  return (
    <div>
      <div className='page-container'>
        <Header />
        <Helmet>
          <title>Become a Member - BTS</title>
          <meta
            name='description'
            content='Join us in creating more compassionate, loving and caring society in our country and the whole of Africa'
          />
        </Helmet>
        {modal.donateModal && <DonateDialog />}
        <div className='page-body'>
          <div className='landing'>
            <div className='overlay'>
              <div className='landing-txt'>
                <label className='txt-header'>
                  We are born to be solutions
                </label>
                <p className='txt-detail'>
                  To create solutions to society's problems rooting poverty and
                  disharmony through education, job creation ,sustainable
                  support to the needy and mentorship in order to change
                  people's lives to goodness. in.
                </p>
                <Button
                  variant='outlined'
                  className={classes.button}
                  size='large'
                >
                  <Link to='/about'>read more</Link>
                </Button>
              </div>
              {/* "About" section */}
              <div className='wrapper'>
                <div className='card-section'>
                  <div className='square-card'>
                    <div className='icon-section'>
                      <img
                        className='lg-icon'
                        src={volunteerIcon}
                        alt='volunteer_icon'
                      />
                    </div>
                    <div className='details-sections'>
                      <h2>Empthy</h2>
                      <p>
                        We serve with empathy. <br />“
                        <strong>
                          <em>Empathy</em>
                        </strong>{' '}
                        is seeing with the eyes of another, listening with the
                        ears of another and feeling with the heart of another.”
                      </p>
                    </div>
                  </div>
                  <div className='square-card'>
                    <div className='icon-section'>
                      <img
                        className='lg-icon'
                        src={LoveIcon}
                        alt='volunteer_icon'
                      />
                    </div>
                    <div className='details-sections'>
                      <h2>Love</h2>
                      <p>
                        We serve with love. <br />“
                        <strong>
                          <em>Love</em>
                        </strong>{' '}
                        Love is not patronizing and charity isn't about pity, it
                        is about love. Charity and love are the same -- with
                        charity you give love.
                      </p>
                    </div>
                  </div>
                  <div className='square-card'>
                    <div className='icon-section'>
                      <img
                        className='lg-icon'
                        src={handshakeIcon}
                        alt='volunteer_icon'
                      />
                    </div>
                    <div className='details-sections'>
                      <h2>Integrity</h2>
                      <p>
                        We serve with Integrity. <br />“
                        <strong>
                          <em>Integrity</em>
                        </strong>{' '}
                        Real integrity is doing the right thing, knowing that
                        nobody's going to know whether you did it or not.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* "featured causes" section */}
              <div className='main-header'>
                <label>Our featured causes</label>
              </div>

              <div className='wrapper'>
                <div className='card-section'>
                  <div className='rectangular-card'>
                    <div className='pictorial-card'>
                      <img
                        src={userPic}
                        alt='project_img'
                        className='project-img'
                      />
                    </div>
                    <div className='project-details'>
                      <div className='header-txt'>
                        <h3>Feeding the hungry people</h3>
                      </div>
                      <div>
                        Through Feed The Hungry, you are answering the cry of
                        the poor who pray, “Lord give us this day our daily
                        bread.”
                      </div>
                    </div>
                    <div className='project-user-action'>
                      <div className='project-opt'>
                        <div className='label-txt'>
                          <label>Raised: 100K Rwf</label>
                        </div>

                        <div className='label-txt'>
                          <label>Goal: 1M Rwf</label>
                        </div>
                      </div>
                      <div className='project-opt'>
                        <div className='label-txt'>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.appBtn}
                            size='large'
                            onClick={openDonateModal}
                          >
                            Donate
                          </Button>
                        </div>
                        <div className='label-txt'>
                          <img
                            className='sm-icon'
                            src={heartIcon}
                            alt='donors_icon'
                          />
                          <p>67 Donors</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='rectangular-card'>
                    <div className='pictorial-card'>
                      <img
                        src={buildHousePic}
                        alt='project_img'
                        className='project-img'
                      />
                    </div>
                    <div className='project-details'>
                      <div className='header-txt'>
                        <h3>House for vulnerables</h3>
                      </div>
                      <div>
                        Housing changes everything for a family and children
                        living in poverty. Join us in changing the life of
                        vulnerables.
                      </div>
                    </div>
                    <div className='project-user-action'>
                      <div className='project-opt'>
                        <div className='label-txt'>
                          <label>Raised: 110K Rwf</label>
                        </div>

                        <div className='label-txt'>
                          <label>Goal: 800K Rwf</label>
                        </div>
                      </div>
                      <div className='project-opt'>
                        <div className='label-txt'>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.appBtn}
                            size='large'
                            onClick={openDonateModal}
                          >
                            Donate
                          </Button>
                        </div>
                        <div className='label-txt'>
                          <img
                            className='sm-icon'
                            src={heartIcon}
                            alt='donors_icon'
                          />
                          <p>57 Donors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='rectangular-card'>
                    <div className='pictorial-card'>
                      <img
                        src={childrenPic}
                        alt='project_img'
                        className='project-img'
                      />
                    </div>
                    <div className='project-details'>
                      <div className='header-txt'>
                        <h3>Provide school materials</h3>
                      </div>
                      <div>
                        We will provide educational stuffs (uniform, school
                        fees, books, sweater, notebooks, pen, pencil,
                        stationary) underprivileged students
                      </div>
                    </div>
                    <div className='project-user-action'>
                      <div className='project-opt'>
                        <div className='label-txt'>
                          <label>Raised: 100K Rwf</label>
                        </div>

                        <div className='label-txt'>
                          <label>Goal: 1M Rwf</label>
                        </div>
                      </div>
                      <div className='project-opt'>
                        <div className='label-txt'>
                          <Button
                            variant='contained'
                            color='secondary'
                            className={classes.appBtn}
                            size='large'
                            onClick={openDonateModal}
                          >
                            Donate
                          </Button>
                        </div>
                        <div className='label-txt'>
                          <img
                            className='sm-icon'
                            src={heartIcon}
                            alt='donors_icon'
                          />
                          <p>67 Donors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* "member testimonies" section */}
              <div className='main-header'>
                <label className='upper-txt'>
                  See what our members are saying
                </label>
              </div>
              <div className='wrapper'>
                <div className='full-card'>
                  <Pagination count={3} variant='outlined' color='primary' />
                  <div className='testimony'>
                    <div className='testimony-img'>
                      <img
                        src={johnPic}
                        className='circle-img'
                        alt='testimonier_img'
                      />
                    </div>
                    <div className='testimony-details'>
                      <p>
                        Adipisicing culpa magna non aliquip officia culpa et in
                        laborum. Ullamco incididunt do exercitation nisi qui non
                        ullamco enim officia deserunt ea id id aliquip. Dolor
                        mollit enim aliqua occaecat minim cillum cillum ex eu
                        proident velit. Exercitation do adipisicing nulla ut
                        exercitation dolore fugiat cupidatat aliqua sunt commodo
                        ut consequat est.
                      </p>
                      <div className='testimony-owner'>
                        <label> John M.</label>
                      </div>
                    </div>
                    <div className='testimony-user'></div>
                  </div>
                  <div className='testimony'>
                    <div className='testimony-img'>
                      <img
                        src={bonfilsPic}
                        className='circle-img'
                        alt='testimonier_img'
                      />
                    </div>
                    <div className='testimony-details'>
                      <p>
                        Adipisicing culpa magna non aliquip officia culpa et in
                        laborum. Ullamco incididunt do exercitation nisi qui non
                        ullamco enim officia deserunt ea id id aliquip. Dolor
                        mollit enim aliqua occaecat minim cillum cillum ex eu
                        proident velit. Exercitation do adipisicing nulla ut
                        exercitation dolore fugiat cupidatat aliqua sunt commodo
                        ut consequat est.
                      </p>
                      <div className='testimony-owner'>
                        <label> Bonfils S.</label>
                      </div>
                    </div>
                    <div className='testimony-user'></div>
                  </div>
                  <div className='testimony'>
                    <div className='testimony-img'>
                      <img
                        src={arsenePic}
                        className='circle-img'
                        alt='testimonier_img'
                      />
                    </div>
                    <div className='testimony-details'>
                      <p>
                        Adipisicing culpa magna non aliquip officia culpa et in
                        laborum. Ullamco incididunt do exercitation nisi qui non
                        ullamco enim officia deserunt ea id id aliquip. Dolor
                        mollit enim aliqua occaecat minim cillum cillum ex eu
                        proident velit. Exercitation do adipisicing nulla ut
                        exercitation dolore fugiat cupidatat aliqua sunt commodo
                        ut consequat est.
                      </p>
                      <div className='testimony-owner'>
                        <label> Arsene M.</label>
                      </div>
                    </div>
                    <div className='testimony-user'></div>
                  </div>
                  <div className='testimony'>
                    <div className='testimony-img'>
                      <img
                        src={fabPic}
                        className='circle-img'
                        alt='testimonier_img'
                      />
                    </div>
                    <div className='testimony-details'>
                      <p>
                        Adipisicing culpa magna non aliquip officia culpa et in
                        laborum. Ullamco incididunt do exercitation nisi qui non
                        ullamco enim officia deserunt ea id id aliquip. Dolor
                        mollit enim aliqua occaecat minim cillum cillum ex eu
                        proident velit. Exercitation do adipisicing nulla ut
                        exercitation dolore fugiat cupidatat aliqua sunt commodo
                        ut consequat est.
                      </p>
                      <div className='testimony-owner'>
                        <label> Fabrice I.</label>
                      </div>
                    </div>
                    <div className='testimony-user'></div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {

  return {
    modal: state.Modals,
  };
};
export default connect(mapStateToProps, { donateModal })(Index);
