import React from 'react';
import '../Styles/Lab.css';

const Lab = () => {
  const tools = [
    {
      id: 1,
      name: "Midjourney",
      category: "توليد الصور",
      desc: "استخدام تقنيات هندسة الأوامر (Prompt Engineering) لإنشاء لقطات سينمائية بدقة Sony A1.",
      icon: "🎨"
    },
    {
      id: 2,
      name: "Runway Gen-3",
      category: "تحريك الفيديو",
      desc: "تحويل الصور الثابتة إلى لقطات متحركة مع الحفاظ على الاتساق البصري والعمق السينمائي.",
      icon: "🎬"
    },
    {
      id: 3,
      name: "React & Vite",
      category: "التطوير البرمجي",
      desc: "بناء منصة تفاعلية سريعة الاستجابة لعرض مخرجات الذكاء الاصطناعي بأفضل أداء.",
      icon: "💻"
    }
  ];

  return (
    <section className="lab-section" id="lab">
      <div className="container">
        <h2 className="section-title">داخل المختبر التقني</h2>
        <p className="section-subtitle">الأدوات والمنهجيات المستخدمة في بناء التجربة السينمائية</p>
        
        <div className="lab-grid">
          {tools.map((tool) => (
            <div className="lab-card" key={tool.id}>
              <div className="card-glass"></div>
              <div className="card-content">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <span className="category-tag">{tool.category}</span>
                <p>{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lab;