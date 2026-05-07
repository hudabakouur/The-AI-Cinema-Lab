import React from 'react';

import '../Styles/videoSection.css'; 

const VideoSection = () => {
  return (
    <section className="video-section" id="video" dir="rtl">
      <div className="container">
        <h2 className="section-title">العرض التعليمي للمشروع</h2>
        <div className="video-wrapper">
         
          <video 
            controls 
            poster="/assets/video-thumbnail.webp" 
            preload="metadata" 
            playsInline
            className="main-project-video"
          >
            <source src="/assets/video2.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-description">
          <h3>استكشاف التقنيات التوليدية</h3>
          <p>شاهد العرض التوضيحي الذي قمنا بإعداده لشرح آلية عمل الذكاء الاصطناعي في تحويل الأوامر النصية إلى وسائط رقمية مبهرة.</p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;