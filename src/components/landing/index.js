import React, { useState } from "react";
import { connect } from "react-redux";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Button, makeStyles } from "@material-ui/core";
import userPhoto from "../../assets/images/victor-img.jpeg";
import deoPic from "../../assets/images/deo.png";
import userPic from "../../assets/images/Joxy3.jpeg";
import childrenPic from "../../assets/images/children.jpg";
import johnPic from "../../assets/images/john.jpeg";
import giselePic from "../../assets/images/Gisele1.png";
import annahPic from "../../assets/images/Annah.png";
import bonfilsPic from "../../assets/images/bonfils.jpeg";
import buildHousePic from "../../assets/images/4.jpg";
import heartIcon from "../../assets/images/heartIcon.png";
import LoveIcon from "../../assets/images/loveIcon.png";
import volunteerIcon from "../../assets/images/volunteerIcon.png";
import handshakeIcon from "../../assets/images/handshakeIcon.png";
import DonateDialog from "../common/donateDialog";
import { donateModal } from "../../redux/actions/modalActions";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    fontSize: 13,
    borderColor: "#4182ff",
    color: "#4182ff",
    "&:hover": {
      borderColor: "#e68b4c",
      color: "#e68b4c"
    }
  },
  appBtn: {
    fontSize: 13,
    backgroundColor: "#e68b4c",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#343434"
    }
  }
}));
const Index = ({ donateModal, modal }) => {
  const classes = useStyles();

  const openDonateModal = () => {
    donateModal(true);
  };
  return (
    <div>
      <div className="page-container">
        <Header />
        <Helmet>
          <title>Become a Member - BTS</title>
          <meta
            name="description"
            content="Join us in creating more compassionate, loving and caring society in our country and the whole of Africa"
          />
        </Helmet>
        {modal.donateModal && <DonateDialog />}
        <div className="page-body">
          <div className="landing">
            <div className="overlay">
              <div className="landing-txt">
                <label className="txt-header">
                  We are born to be solutions
                </label>
                <p className="txt-detail">
                  To create solutions to society's problems rooting poverty and
                  disharmony through education, job creation ,sustainable
                  support to the needy and mentorship in order to change
                  people's lives to goodness. in.
                </p>
                <Button
                  variant="outlined"
                  className={classes.button}
                  size="large"
                >
                  <Link to="/about">read more</Link>
                </Button>
              </div>
              {/* "About" section */}
              <div className="wrapper">
                <div className="card-section">
                  <div className="square-card">
                    <div className="icon-section">
                      <img
                        className="lg-icon"
                        src={volunteerIcon}
                        alt="volunteer_icon"
                      />
                    </div>
                    <div className="details-sections">
                      <h2>Empathy</h2>
                      <p>
                        We serve with empathy. <br />“
                        <strong>
                          <em>Empathy</em>
                        </strong>{" "}
                        is seeing with the eyes of another, listening with the
                        ears of another and feeling with the heart of another.”
                      </p>
                    </div>
                  </div>
                  <div className="square-card">
                    <div className="icon-section">
                      <img
                        className="lg-icon"
                        src={LoveIcon}
                        alt="volunteer_icon"
                      />
                    </div>
                    <div className="details-sections">
                      <h2>Love</h2>
                      <p>
                        We serve with love. <br />“
                        <strong>
                          <em>Love</em>
                        </strong>{" "}
                        Love is not patronizing and charity isn't about pity, it
                        is about love. Charity and love are the same -- with
                        charity you give love.
                      </p>
                    </div>
                  </div>
                  <div className="square-card">
                    <div className="icon-section">
                      <img
                        className="lg-icon"
                        src={handshakeIcon}
                        alt="volunteer_icon"
                      />
                    </div>
                    <div className="details-sections">
                      <h2>Integrity</h2>
                      <p>
                        We serve with Integrity. <br />“
                        <strong>
                          <em>Integrity</em>
                        </strong>{" "}
                        Real integrity is doing the right thing, knowing that
                        nobody's going to know whether you did it or not.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* "featured causes" section */}
              <div className="main-header">
                <label>Our featured causes</label>
              </div>

              <div className="wrapper">
                <div className="card-section">
                  <div className="rectangular-card">
                    <div className="pictorial-card">
                      <img
                        src={userPic}
                        alt="project_img"
                        className="project-img"
                      />
                    </div>
                    <div className="project-details">
                      <div className="header-txt">
                        <h3>Feeding the hungry people</h3>
                      </div>
                      <div>
                        Through Feed The Hungry, you are answering the cry of
                        the poor who pray, “Lord give us this day our daily
                        bread.”
                      </div>
                    </div>
                    <div className="project-user-action">
                      <div className="project-opt">
                        <div className="label-txt">
                          <label>Raised: 100K Rwf</label>
                        </div>

                        <div className="label-txt">
                          <label>Goal: 1M Rwf</label>
                        </div>
                      </div>
                      <div className="project-opt">
                        <div className="label-txt">
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.appBtn}
                            size="large"
                            onClick={openDonateModal}
                          >
                            Donate
                          </Button>
                        </div>
                        <div className="label-txt">
                          <img
                            className="sm-icon"
                            src={heartIcon}
                            alt="donors_icon"
                          />
                          <p>67 Donors</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rectangular-card">
                    <div className="pictorial-card">
                      <img
                        src={buildHousePic}
                        alt="project_img"
                        className="project-img"
                      />
                    </div>
                    <div className="project-details">
                      <div className="header-txt">
                        <h3>House for vulnerables</h3>
                      </div>
                      <div>
                        Housing changes everything for a family and children
                        living in poverty. Join us in changing the life of
                        vulnerables.
                      </div>
                    </div>
                    <div className="project-user-action">
                      <div className="project-opt">
                        <div className="label-txt">
                          <label>Raised: 110K Rwf</label>
                        </div>

                        <div className="label-txt">
                          <label>Goal: 800K Rwf</label>
                        </div>
                      </div>
                      <div className="project-opt">
                        <div className="label-txt">
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.appBtn}
                            size="large"
                            onClick={openDonateModal}
                          >
                            Donate
                          </Button>
                        </div>
                        <div className="label-txt">
                          <img
                            className="sm-icon"
                            src={heartIcon}
                            alt="donors_icon"
                          />
                          <p>57 Donors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rectangular-card">
                    <div className="pictorial-card">
                      <img
                        src={childrenPic}
                        alt="project_img"
                        className="project-img"
                      />
                    </div>
                    <div className="project-details">
                      <div className="header-txt">
                        <h3>Provide school materials</h3>
                      </div>
                      <div>
                        We will provide educational stuffs (uniform, school
                        fees, books, sweater, notebooks, pen, pencil,
                        stationary) underprivileged students
                      </div>
                    </div>
                    <div className="project-user-action">
                      <div className="project-opt">
                        <div className="label-txt">
                          <label>Raised: 100K Rwf</label>
                        </div>

                        <div className="label-txt">
                          <label>Goal: 1M Rwf</label>
                        </div>
                      </div>
                      <div className="project-opt">
                        <div className="label-txt">
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.appBtn}
                            size="large"
                            onClick={openDonateModal}
                          >
                            Donate
                          </Button>
                        </div>
                        <div className="label-txt">
                          <img
                            className="sm-icon"
                            src={heartIcon}
                            alt="donors_icon"
                          />
                          <p>67 Donors</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* "member testimonies" section */}
              <div className="main-header">
                <label className="upper-txt">
                  See what our members are saying
                </label>
              </div>
              <div className="wrapper">
                <div className="full-card">
                  <div className="testimony">
                    <div className="testimony-img">
                      <img
                        src={johnPic}
                        className="circle-img"
                        alt="testimonier_img"
                      />
                    </div>
                    <div className="testimony-details">
                      <p>
                        I grew up seeing many children, orphans and widows who
                        needed my help. Most of them had the problem of hunger,
                        clothing and school materials. So, I decided to work
                        harder and help those needy people.I will always strive
                        to show love and compassion to underprivileged people.
                      </p>
                      <div className="testimony-owner">
                        <label> John M.</label>
                      </div>
                    </div>
                    <div className="testimony-user"></div>
                  </div>
                  <div className="testimony">
                    <div className="testimony-img">
                      <img
                        src={deoPic}
                        className="circle-img"
                        alt="testimonier_img"
                      />
                    </div>
                    <div className="testimony-details">
                      <p>
                        BTS beginning was small but brightened many lives. You
                        can live as a light for others in darkness of hunger,
                        homelessness, illiteracy, violence, health insecurity
                        and fear of tomorrow. We believe our collaboration can
                        make a greater influence, just empathize with others,
                        you will know how they feel living in the most lacking
                        environment.
                      </p>
                      <div className="testimony-owner">
                        <label> Deo N.</label>
                      </div>
                    </div>
                    <div className="testimony-user"></div>
                  </div>
                  <div className="testimony">
                    <div className="testimony-img">
                      <img
                        src={annahPic}
                        className="circle-img"
                        alt="testimonier_img"
                      />
                    </div>
                    <div className="testimony-details">
                      <p>
                        There's much more gain in giving than in receiving.
                        Helping others to me is a special privillage and call
                        from God to work with him.God didn't send his angels
                        physically to help the poor but works through us to show
                        his love. Our happiness lies in sharing our blessings!
                      </p>
                      <div className="testimony-owner">
                        <label> Annah B.</label>
                      </div>
                    </div>
                    <div className="testimony-user"></div>
                  </div>
                  <div className="testimony">
                    <div className="testimony-img">
                      <img
                        src={giselePic}
                        className="circle-img"
                        alt="testimonier_img"
                      />
                    </div>
                    <div className="testimony-details">
                      <p>
                        "The journey to eradication of poverty, hunger,
                        homelessness,school dropouts, drug abuse and domestic
                        violence requires more than just policies and
                        strategies. It is a journey that the whole society must
                        embark on as these are issues affecting not only one
                        individual but society at large. The Batton is in my
                        hands and yours so we can take part in creating a
                        society we wants for ourselves and the generations to
                        follow, let us use it in transformation of our society.
               
                      </p>
                      <div className="testimony-owner">
                        <label> Gisele RWAKA U.</label>
                      </div>
                    </div>
                    <div className="testimony-user"></div>
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
const mapStateToProps = state => {
  return {
    modal: state.Modals
  };
};
export default connect(mapStateToProps, { donateModal })(Index);
