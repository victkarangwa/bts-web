import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Index from './components/landing';
import './assets/styles/index.scss';
import Contact from './components/contact/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path='/' exact component={Index} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
