import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import './index.css';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUgpmYZ-yuNPm8nqBW-kdgv_7auW1Ixpc",
  authDomain: "soluinformaticas-acabot.firebaseapp.com",
  projectId: "soluinformaticas-acabot",
  storageBucket: "soluinformaticas-acabot.appspot.com",
  messagingSenderId: "627796013600",
  appId: "1:627796013600:web:2f99290a42e29382a9c245"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);