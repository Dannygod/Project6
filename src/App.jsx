import React from 'react';
import Nav from "./Components//Nav";
import Footer from './Components/Footer';
import Homepage from './Pages/Homepage';
import About from './Pages/About';
import More from './Pages/More';
import {Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router basename="/Project6">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;