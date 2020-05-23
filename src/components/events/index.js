import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Box from '@material-ui/core/Box';
import '../../assets/styles/index.scss';
import { Helmet } from 'react-helmet';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingEvents: [
        {
            date: "12th September 2020",
            location: "Kigali ",
            description: "Fundraising of distributing clean water to poor families"
          },
          {
              date: "12th September 2020",
              location: "Kigali ",
              description: "Fundraising of distributing clean water to poor families"
            },
            {
              date: "12th September 2020",
              location: "Kigali ",
              description: "Fundraising of distributing clean water to poor families"
            },
            {
              date: "12th September 2020",
              location: "Kigali ",
              description: "Fundraising of distributing clean water to poor families"
            }
      ]
    };
  }
  render() {
    return (
      <div className='page-container'>
        <Header />
        <Helmet>
          <title>About us - BTS</title>
        </Helmet>
        <div className='event-page-container'>
          <div className='event-page-header'>
            <h4>Events and Activities</h4>
          </div>
          <div className='events-wrapper'>
            <div className='finished-events-wrapper'>
              <div>
                <h6>Past events</h6>
              </div>
              <div className='finished-events-category'>
                <div className='card-event'>
                  <div className='img-container'>
                    <div className='content-container'>
                      <h5>Sep.6,2019 Kigali-Rwanda</h5>
                      <div className='content-desc'>
                        <div>
                          <h5>Building widow's house</h5>
                        </div>
                        <div>
                          <p>
                            Labore aute ut Lorem nulla magna ut pariatur.
                            Aliquip ad Lorem est proident irure et est amet id
                            dolor est fugiat ipsum. Esse consequat voluptate
                            nulla proident sint irure et est amet id dolor est
                            fugiat ipsum. Esse consequat voluptate nulla
                            proident sint <a href='/events'>Read more</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-event'>
                  <div className='img-container'>
                    <div className='content-container'>
                      <h5>Sep.6,2019 Kigali-Rwanda</h5>
                      <div className='content-desc'>
                        <div>
                          <h5>Building widow's house</h5>
                        </div>
                        <div>
                          <p>
                            Labore aute ut Lorem nulla magna ut pariatur.
                            Aliquip ad Lorem est proident irure et est amet id
                            dolor est fugiat ipsum. Esse consequat voluptate
                            nulla proident sint irure et est amet id dolor est
                            fugiat ipsum. Esse consequat voluptate nulla
                            proident sint <a href='/events'>Read more</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-event'>
                  <div className='img-container'>
                    <div className='content-container'>
                      <h5>Sep.6,2019 Kigali-Rwanda</h5>
                      <div className='content-desc'>
                        <div>
                          <h5>Building widow's house</h5>
                        </div>
                        <div>
                          <p>
                            Labore aute ut Lorem nulla magna ut pariatur.
                            Aliquip ad Lorem est proident irure et est amet id
                            dolor est fugiat ipsum. Esse consequat voluptate
                            nulla proident sint irure et est amet id dolor est
                            fugiat ipsum. Esse consequat voluptate nulla
                            proident sint <a href='/events'>Read more</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='card-event'>
                  <div className='img-container'>
                    <div className='content-container'>
                      <h5>Sep.6,2019 Kigali-Rwanda</h5>
                      <div className='content-desc'>
                        <div>
                          <h5>Building widow's house</h5>
                        </div>
                        <div>
                          <p>
                            Labore aute ut Lorem nulla magna ut pariatur.
                            Aliquip ad Lorem est proident irure et est amet id
                            dolor est fugiat ipsum. Esse consequat voluptate
                            nulla proident sint irure et est amet id dolor est
                            fugiat ipsum. Esse consequat voluptate nulla
                            proident sint <a href='/events'>Read more</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='upcoming-events-wrapper'>
              <div>
                <h6> Upcoming events and activities</h6>
              </div>
              <div>
                {this.state.upcomingEvents.length !== 0 ? (
                  this.state.upcomingEvents.map((event) => {
                    return (
                      <div className='upcoming-card'>
                        <div className='upcoming-event-card-title'>
                          <div className='date'>{event.date}</div>
                          <div className='upcoming-event-card-location'>
                            <div className='location'>Location:</div>
                            <div className='location-name'>
                              {' '}
                              {event.location}
                            </div>
                          </div>
                        </div>
                        <Box m={3} />
                        <div>
                          <p>{event.description}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className='no-event-txt'>
                    No upcoming events and activities
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Event;
