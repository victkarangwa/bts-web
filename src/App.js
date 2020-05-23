import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Index from './components/landing';
import './assets/styles/index.scss';
import Contact from './components/contact/index';
import { ToastContainer } from 'react-toastify';
import About from './components/about/index';
import Event from './components/events/index';
import Membership from './components/membership'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/membership/apply' exact component={Membership} />
          <Route path='/about' component={About} />
          <Route path='/events' exact component={Event}/>
        </Switch>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
