import React from 'react';

import {
  BrowserRouter as Router, Switch, Route
} from "react-router-dom";

import Home from '../views/Home';
import Portfolio from '../views/Portfolio';
import Contact from '../views/Contact';
import Layout from '../components/Layout';

export default function Routes() {
    return (
        <Router>
            <Layout>
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
            </Layout>
        </Router>
    );
}