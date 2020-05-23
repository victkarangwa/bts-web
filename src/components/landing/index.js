import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Button, makeStyles } from '@material-ui/core';
import userPhoto from '../../assets/images/victor-img.jpeg';
import userPic from '../../assets/images/jox.jpg';
import heartIcon from '../../assets/images/heartIcon.png';
import peopleIcon from '../../assets/images/peopleIcon.png';
import volunteerIcon from '../../assets/images/volunteerIcon.png';
import handshakeIcon from '../../assets/images/handshakeIcon.png';
import DonateDialog from '../common/donateDialog';
import { donateModal } from '../../redux/actions/modalActions';

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
                  Read More
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
                      <h2>Title</h2>
                      <p>
                        Labore aute ut Lorem nulla magna ut pariatur. Aliquip ad
                        Lorem est proident irure et est amet id dolor est fugiat
                        ipsum. Esse consequat voluptate nulla proident sint.
                      </p>
                    </div>
                  </div>
                  <div className='square-card'>
                    <div className='icon-section'>
                      <img
                        className='lg-icon'
                        src={peopleIcon}
                        alt='volunteer_icon'
                      />
                    </div>
                    <div className='details-sections'>
                      <h2>Title</h2>
                      <p>
                        Labore aute ut Lorem nulla magna ut pariatur. Aliquip ad
                        Lorem est proident irure et est amet id dolor est fugiat
                        ipsum. Esse consequat voluptate nulla proident sint.
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
                      <h2>Title</h2>
                      <p>
                        Labore aute ut Lorem nulla magna ut pariatur. Aliquip ad
                        Lorem est proident irure et est amet id dolor est fugiat
                        ipsum. Esse consequat voluptate nulla proident sint.
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
                        Do labore aliquip velit sint aliqua dolore veniam ut
                        eiusmod id.
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
                        Do labore aliquip velit sint aliqua dolore veniam ut
                        eiusmod id.
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
                        Do labore aliquip velit sint aliqua dolore veniam ut
                        eiusmod id.
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
                  <div className='testimony'>
                    <div className='testimony-img'>
                      <img
                        src={userPhoto}
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
                        src={userPhoto}
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
                        src={userPhoto}
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
                        src={userPhoto}
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
