import React from 'react';
import '../Styles/video.css';

const Video= () => {
  return (
    <section className="video-section1" id="video2">
      <div className="container1">
        <h2 className="section-title1">فيديو مصمم بالكامل بالذكاء الاصطناعي</h2>
        <div className="video-wrapper1">
          <video controls poster="/assets/video-thumbnail.webp">
            <source src="/assets/project-video.mp4" type="video/mp4" />
            متصفحك لا يدعم تشغيل الفيديو.
          </video>
        </div>
        <div className="video-description1">
          <h3>استكشاف التقنيات التوليدية</h3>
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Video;