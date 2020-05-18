import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Contact from './components/contact/index';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
