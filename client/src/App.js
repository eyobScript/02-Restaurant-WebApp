import React from 'react';
import {BrowserRouter as Router, Routes, Route}from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Routing from './Routing'

function App() {
  return (
    <Router>
      <Routing />
      <Footer />
    </Router>
  );
}

export default App;