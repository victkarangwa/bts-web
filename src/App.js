import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Index from './components';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={Index} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
