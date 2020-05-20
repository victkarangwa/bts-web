import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Index from './components/landing';
import './assets/styles/index.scss';
import Contact from './components/contact/index';
// import Index from './components';
import About from './components/about/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path='/' exact component={Index} />
          <Route path='/contact' exact component={Contact} />
          {/* <Route path='/' exact component={Index} /> */}
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
