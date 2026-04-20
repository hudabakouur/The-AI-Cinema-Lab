import React from 'react';
import '../Styles/Hero.css';

import video from '../assets/video.mp4'; 

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* عنصر الفيديو الخلفي */}
      <div className="hero-video-wrapper">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* طبقة تظليل سينمائية لبروز النصوص */}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title animate-fade-in">عالم السينما التوليدية</h1>
        <p className="hero-subtitle animate-fade-up">
          استكشاف آفاق جديدة في عالم الوسائط المتعددة باستخدام الذكاء الاصطناعي
        </p>
        <div className="hero-buttons">
          <a href="#gallery" className="btn-main">استعرض المعرض</a>
          <a href="#video" className="btn-secondary">شاهد الفيديو</a>
        </div>
      </div>
      
      <div className="hero-gradient-bottom"></div>
    </section>
  );
};

export default Hero;