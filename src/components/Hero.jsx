import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">مختبر السينما التوليدية</h1>
        <p className="hero-subtitle">استكشاف آفاق جديدة في عالم الوسائط المتعددة باستخدام الذكاء الاصطناعي</p>
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