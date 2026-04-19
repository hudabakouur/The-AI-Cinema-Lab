import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // تأثير لتغيير خلفية النافبار عند التمرير لأسفل
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">🎬</span>
          <span className="logo-text">AI Cinema Lab</span>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="#gallery">المعرض</a></li>
          <li><a href="#lab">المختبر</a></li>
          <li><a href="#video">الفيديو</a></li>
          <li><a href="#team">الفريق</a></li>
        </ul>

        <div className="nav-cta">
          <button className="contact-btn">تواصل معنا</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;