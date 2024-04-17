import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/contact';
import BlogPage from './components/blog';
import Footer from './components/footer';
import Home from './components/Home';
import ModeToggle from './components/ModeToggle';
import BugFixes from './components/bugFixes';







function App() {
  const [mode, setMode] = useState('standard');

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const getBackgroundColor = () => {
    switch (mode) {
      case 'standard':
        return 'white';
      case 'dark':
        return '#333';
      case 'light':
        return '#f5f5f5';
      default:
        return 'white';
    }
  };

  const getTextColor = () => {
    return mode === 'dark' ? 'white' : 'black';
  };

  return (
    <Router basename="/finalPortfolio">
      <div className="App">
        <Navbar />
        <header
          className="App-header"
          style={{
            backgroundColor: getBackgroundColor(),
            color: getTextColor(),
            minHeight: '100vh',
            padding: '1rem',
          }}
        >
          <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/bugFixes" element={<BugFixes />} />
          </Routes>
           <ModeToggle mode={mode} onModeChange={handleModeChange} />
          
        </header><Footer />
      </div>
    </Router>
  );
}

export default App;
