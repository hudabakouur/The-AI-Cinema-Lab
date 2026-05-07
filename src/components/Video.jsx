import React from "react";

import "../Styles/video.css"; 

const Video = () => {
  return (
    <section className="video-section-full" id="video-full" dir="rtl">
      <div className="container-full">
        <h2 className="section-title-full">
          فيديو مصمم بالكامل بالذكاء الاصطناعي
        </h2>
        <div className="video-wrapper-full">
        
          <video 
            controls 
            poster="/assets/icone.webp" 
            className="ai-generated-video"
            preload="metadata"
            playsInline
          >
            <source src="/assets/VideoProject3.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-description-full">
          <h3>استكشاف التقنيات التوليدية</h3>
          <p>
            عرض سينمائي تم إنشاؤه بالكامل باستخدام نماذج الذكاء الاصطناعي
            المتطورة[cite: 17].
          </p>
        </div>
      </div>
    </section>
  );
};

export default Video;