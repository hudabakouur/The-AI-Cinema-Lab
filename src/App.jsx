import React from 'react';
import './index.css'; 
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Comparison from './components/Comparison';
import Team from './components/Team';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Gallery />
      <Comparison />
      <Team />
      <footer style={{padding: '40px', textAlign: 'center', color: '#666', fontSize: '0.8rem'}}>
        <p>© 2026 The AI Cinema Lab | Engineer Huda Haj Bakour & Team</p>
      </footer>
    </div>
  );
}

export default App;