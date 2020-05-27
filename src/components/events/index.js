import React, { Component } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Box from "@material-ui/core/Box";
import "../../assets/styles/index.scss";
import { Helmet } from "react-helmet";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upcomingEvents: [
        {
          date: "30th May 2020",
          location: "Kigali ",
          description:
            "We have BTS general activity of building house and toilet for a man located at Kanombe. "
        }
      ]
    };
  }
  render() {
    return (
      <div className="page-container">
        <Header />
        <Helmet>
          <title>About us - BTS</title>
        </Helmet>
        <div className="event-page-container">
          <div className="event-page-header">
            <h4>Events and Activities</h4>
          </div>
          <div className="events-wrapper">
            <div className="finished-events-wrapper">
              <div>
                <h6>Past events</h6>
              </div>
              <div className="finished-events-category">
                <div className="card-event">
                  <div className="img-container1">
                    <div className="content-container">
                      <h5>June.01,2019 Kigali-Rwanda</h5>
                      <div className="content-desc">
                        <div>
                          <h5>Building widow's house</h5>
                        </div>
                        <div>
                          <p>
                            After searching for poor families in some areas in
                            Rwanda, we helped them accordingly to their
                            needs.Here, like BTS members we built a house for
                            the widow whose house was old and almost falling on
                            her.<a href="/events">Read more</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-event">
                  <div className="img-container2">
                    <div className="content-container">
                      <h5>Sep.1,2018 Kigali-Rwanda</h5>
                      <div className="content-desc">
                        <div>
                          <h5>Meet with street children</h5>
                        </div>
                        <div>
                          <p>
                            It was a sad but good moment meeting with the
                            children living on the streets.They told us all
                            about their sufferings in life and the way they live
                            together with love like siblings as we also adviced
                            and comforted them.
                            <a href="/events">Read more</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-event">
                  <div className="img-container3">
                    <div className="content-container">
                      <h5>June.6,2019 Kigali-Rwanda</h5>
                      <div className="content-desc">
                        <div>
                          <h5>Family donation</h5>
                        </div>
                        <div>
                          <p>
                            Some families face the problem of hunger or getting
                            food in very difficult means.Still finding a
                            sustainable solution to this problem, we meanwhile
                            provide food for them.
                            <a href="/events">Read more</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-event">
                  <div className="img-container4">
                    <div className="content-container">
                      <h5>Oct.6,2018 Kigali-Rwanda</h5>
                      <div className="content-desc">
                        <div>
                          <h5>Family visitation</h5>
                        </div>
                        <div>
                          <p>
                            Due to the passion we have of helping, we usually
                            take time to visit the families we help.They don't
                            just only need tangible things (though we always do
                            our best donate them), but also need some advices to
                            guide them in usual life.
                            <a href="/events">Read more</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="upcoming-events-wrapper">
              <div>
                <h6> Upcoming events and activities</h6>
              </div>
              <div>
                {this.state.upcomingEvents.length !== 0 ? (
                  this.state.upcomingEvents.map(event => {
                    return (
                      <div className="upcoming-card">
                        <div className="upcoming-event-card-title">
                          <div className="date">{event.date}</div>
                          <div className="upcoming-event-card-location">
                            <div className="location">Location:</div>
                            <div className="location-name">
                              {" "}
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
                  <div className="no-event-txt">
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
