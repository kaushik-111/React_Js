import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Route
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';

import './Components/home.css';
import './Components/about.css';
import './Components/Services.css';
// import './Components/skills.css';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Project from './Components/Project';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
      </Routes>
    </Router>
  );
}

export default App;
