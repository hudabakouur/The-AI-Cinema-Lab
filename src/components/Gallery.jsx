import React, { useState, useEffect } from 'react';
import '../Styles/Gallery.css';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // مصفوفة تحتوي على 10 صور من الـ assets
  const mediaItems = [
    { id: 0, title: "دمشق 2100", url: "/assets/damac2100.webp", desc: "رؤية مستقبلية لمدينة دمشق بنظام السايبربانك." },
    { id: 1, title: "أصالة العلا", url: "/assets/alola.webp", desc: "محاكاة الطبيعة الصخرية في العلا باستخدام الذكاء الاصطناعي." },
    { id: 2, title: "دار الاوبرا", url: "/assets/obera.webp", desc: " دار الأوبرا وهي تستضيف فرقة موسيقية هولوغرامية تعزف مقطوعات كلاسيكية دمشقية" },
    { id: 3, title: "اعادة اعمار سوريا", url: "/assets/newdamac.webp", desc: "محاكاة للاحياء المدمرة في سوريا بعد اعادة الاعمار " },
    { id: 4, title: " الريف السوري ", url: "/assets/reef.webp", desc: "كيف يتخيل الذكاء الصنعي الريف السوري   " },
    { id: 5, title: "  العنوان", url: "/assets/6.webp", desc: " العبارة" },
    { id: 6, title: " العنوان", url: "/assets/7.webp", desc: " العبارة" },
    { id: 7, title: "العنوان ", url: "/assets/8.webp", desc: " العبارة" },
    { id: 8, title: "العنوان ", url: "/assets/9.webp", desc: " العبارة" },
    { id: 9, title: " العنوان", url: "/assets/10.webp", desc: "العبارة" }
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % mediaItems.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, mediaItems.length]);

  const handleManualChange = (index) => {
    setIsAutoPlay(false);
    setActiveIndex(index);
  };

  return (
    <section className="gallery-section" id="gallery">
   
      <style>{`
        .gallery-section {
         
      `}</style>

      <div className="gallery-header">
        <h2 className="gallery-title">معرض الرؤى السينمائية</h2>
        <p className="gallery-subtitle">استكشف {mediaItems.length} عوالم تم توليدها بالكامل عبر مختبرنا</p>
      </div>

      <div className="slider-wrapper">
        <button className="slide-nav-btn prev" onClick={() => handleManualChange((activeIndex - 1 + mediaItems.length) % mediaItems.length)}>
          <span>&#10094;</span>
        </button>

        <div className="cards-container">
          {mediaItems.map((item, index) => {
            let position = "card-hidden";
            if (index === activeIndex) position = "card-active";
            else if (index === (activeIndex - 1 + mediaItems.length) % mediaItems.length) position = "card-prev";
            else if (index === (activeIndex + 1) % mediaItems.length) position = "card-next";

            return (
              <div 
                key={item.id}
                className={`gallery-card-item ${position}`}
                onClick={() => handleManualChange(index)}
              >
                <img src={item.url} alt={item.title} className="card-img" />
                <div className="card-info-box">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        <button className="slide-nav-btn next" onClick={() => handleManualChange((activeIndex + 1) % mediaItems.length)}>
          <span>&#10095;</span>
        </button>
      </div>

      <div className="pagination-dots">
        {mediaItems.map((_, index) => (
          <span 
            key={index} 
            className={`dot-item ${index === activeIndex ? 'active-dot' : ''}`}
            onClick={() => handleManualChange(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Gallery;