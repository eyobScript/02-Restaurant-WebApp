// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/Navbar'; // Adjust the path accordingly
import Banner from './Components/Header/Banner'; // Your Banner component
import Footer from './Components/Footer/Footer';
import Menu from './Components/ExploreMenu/MenuList';
// import Home from './Pages/Home'; // Import your pages
// import About from './Pages/About';
// import Services from './Pages/Services';
// import Menu from './Pages/Menu';
// import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Banner /> {/* Include your Banner or main content here */}
      <Menu />
      <Footer />
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </Router>
  );
}

export default App;
