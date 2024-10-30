import React from 'react';
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Routing from './Routing'
import Navbar from './Components/Header/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routing />
      <Footer />
    </Router>
  );
}

export default App;