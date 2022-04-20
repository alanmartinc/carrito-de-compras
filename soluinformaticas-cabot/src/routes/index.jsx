import React from 'react';

import {
    BrowserRouter, Routes, Route
} from "react-router-dom";

import Layout from '../components/Layout';
import ItemListContainer from '../components/Items/ItemListContainer';
import Products from '../views/Products';
import Services from '../views/Services';
import ItemDetailContainer from '../components/Items/ItemDetailContainer';
import Portfolio from '../views/Portfolio';
import Details from '../views/Details';
import Contact from '../views/Contact';
import CodeError from '../views/CodeError';
import MessageConfirm from '../views/Contact/MessageConfirm';
import Cart from '../views/Cart';

export default function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<ItemListContainer />} />

                    <Route exact path='/category/:id' element={<ItemListContainer />} />

                    <Route exact path='/products' element={<Products />} />

                    <Route exact path='/services' element={<Services />} />

                    <Route exact path='/item/:id' element={<ItemDetailContainer />} />

                    <Route exact path='/details' element={<Details />} />
                    
                    <Route exact path='/portfolio' element={<Portfolio />} />

                    <Route exact path='/contact' element={<Contact />} />

                    <Route exact path='/contact-sucess' element={<MessageConfirm />} />

                    <Route path='*' element={<CodeError />} />

                    <Route  path='/cart' element={<Cart/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}