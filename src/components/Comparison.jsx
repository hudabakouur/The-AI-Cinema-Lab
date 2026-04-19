
import React from 'react';
import '../styles/Comparison.css';

const Comparison = () => {
  return (
    <section className="comparison-section" id="lab">
      <div className="container">
        <h2 className="section-title">مختبر المعالجة الرقمية</h2>
        <p className="section-subtitle">شاهد كيف تقوم أدوات الـ AI بتحسين وتعديل الصور بدقة عالية</p>
        
        <div className="comparison-grid">
          {/* كرت المقارنة الأول */}
          <div className="comparison-card">
            <div className="image-pair">
              <div className="image-container">
                <img src="/assets/original-1.webp" alt="Original" />
                <span className="label">قبل (Original)</span>
              </div>
              <div className="image-container">
                <img src="/assets/ai-enhanced-1.webp" alt="AI Enhanced" />
                <span className="label ai">بعد (Generative AI)</span>
              </div>
            </div>
            <div className="comparison-info">
              <h3>تحسين المشهد السينمائي</h3>
              <p>تم استخدام تقنية Generative Fill لإضافة عناصر إضاءة وتفاصيل دقيقة للمشهد.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;