import React, { useState, useRef, useEffect } from 'react';
import '../Styles/Comparison.css';

// استدعاء الصور هون رح نحط صور قبل وبعد
import imgBefore from '../assets/5.webp'; 
import imgAfter from '../assets/6.webp'; 

const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!isDragging && event.type !== 'touchstart') return;
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (event.pageX || (event.touches && event.touches[0].pageX)) - rect.left;
    
    let position = (x / rect.width) * 100;
    
    if (position < 0) position = 0;
    if (position > 100) position = 100;

    setSliderPosition(position);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section className="comparison-section" id="lab">
      <div className="comparison-container">
        <div className="comparison-header">
          <h2>مختبر المعالجة الرقمية</h2>
          <p>
            قارن بين دقة اللقطة الخام ونتائج المعالجة التوليدية المتطورة من خلال سحب المقبض التفاعلي.
          </p>
        </div>

        <div 
          className="slider-container"
          ref={containerRef}
          onMouseMove={handleMove}
          onMouseDown={handleMouseDown}
          onTouchMove={handleMove}
          onTouchStart={handleMouseDown}
        >
         
          <div className="image-layer after-layer">
            <img src={imgAfter} alt="بعد المعالجة الرقمية" />
          </div>

        
          <div 
            className="image-layer before-layer"
            style={{ width: `${sliderPosition}%` }}
          >
            <img src={imgBefore} alt="اللقطة الخام الأصلية" />
          </div>

         
          <div 
            className="handle-bar"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="handle-control">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M18 8L22 12L18 16M6 8L2 12L6 16" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSlider;