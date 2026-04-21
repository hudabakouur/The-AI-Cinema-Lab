import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Lab from './components/Lab';
import Team from './components/Team';
import VideoSection from './components/VideoSection';
import Comparision from './components/Comparison';
import video from './components/video';
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Gallery />
      <Lab />
      <Comparision />
      <video />
      <VideoSection />
      <Team />
    
    </div>

  );
}

export default App;