import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact';
import Container from './components/Container/Container';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <Switch>
          <Route exact path='/' element={<Home />}>
            <Home />
          </Route>
          <Route exact path='/portfolio' element={<Portfolio />}>
            <Portfolio />
          </Route>
          <Route exact path='/contact' element={<Contact />}>
            <Contact />
          </Route>
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();