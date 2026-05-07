import React, { useState, useEffect } from 'react';
import '../Styles/Navbar.css';
import logoImg from '../assets/logo.webp'; 

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
        
          <img src={logoImg} alt="AI Cinema Lab" className="navbar-logo-img" />
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