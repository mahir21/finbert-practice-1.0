// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';
import Prediction from './components/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout.js';
import About from './components/About.js'; 
import Contact from './components/ContactUs.js';
import Services from './components/Services.js';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';

import AboutProject from './components/AboutProject.js';
import Finbert from './components/Finbert.js';
import LSTM from './components/Lstm.js';
import GRU from './components/Gru.js';



function App() {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prediction" element={<Prediction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/services" element={<Services />} /> 
          <Route path="/project" element={<AboutProject />} /> 
          <Route path="/finbert" element={<Finbert/>} /> 
          <Route path="/lstm" element={<LSTM/>} /> 
          <Route path="/gru" element={<GRU/>} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
