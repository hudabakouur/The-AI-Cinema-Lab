import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Lab from './components/Lab';
import Team from './components/Team';
import VideoSection from './components/VideoSection';
import Comparision from './components/Comparison';
import Video from './components/video';
import AIEthics from './components/AIEthics';
function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <AIEthics />
      <Gallery />
      <Lab />
      <Comparision />
      <Video />
      <VideoSection />
       
      <Team />
      
    </div>

  );
}

export default App;