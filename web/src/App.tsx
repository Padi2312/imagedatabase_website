import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './landingpage/LandingPage';
import Header from './utils/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>

            <Route path="/" component={LandingPage} />

          </Switch>
      </Router>
    </div>
  );
}

export default App;
