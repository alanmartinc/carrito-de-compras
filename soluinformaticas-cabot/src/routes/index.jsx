import React from 'react';

import {
    BrowserRouter, Routes, Route
} from "react-router-dom";

import Layout from '../components/Layout';
import Home from '../views/Home';
import Portfolio from '../views/Portfolio';
import Prices from '../views/Prices';
import Details from '../views/Details';
import Contact from '../views/Contact';
import CodeError from '../views/CodeError';
import MessageConfirm from '../views/Contact/MessageConfirm';

export default function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                    
                    <Route path='/portfolio' element={<Portfolio />} />

                    <Route path='/prices' element={<Prices />} />

                    <Route path='/details' element={<Details />} />

                    <Route path='/contact' element={<Contact />} />

                    <Route path='/contact-sucess' element={<MessageConfirm />} />

                    <Route path='*' element={<CodeError />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}