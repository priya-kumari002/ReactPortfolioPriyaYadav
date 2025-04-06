import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import Resume from './component/Resume';
import Footer from './component/Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <nav className="navbar">
        <div className="nav-logo">MyPortfolio</div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link to="/project" onClick={() => setMenuOpen(false)}>Project</Link>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
