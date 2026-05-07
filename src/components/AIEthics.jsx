import React from "react";
import "../Styles/AIEthics.css";

const AIEthics = () => {
  const data = [
    {
      title: "الإيجابيات (Pros)",
      icon: (
        <svg viewBox="0 0 24 24" className="icon-yellow">
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
          <path d="M9 18h6" />
          <path d="M10 22h4" />
        </svg>
      ),
      items: [
        "تسريع عملية الإنتاج الإبداعي",
        "تحسين جودة الوسائط القديمة",
        "توفير تكاليف التصوير والمونتاج",
      ],
    },
    {
      title: "السلبيات (Cons)",
      icon: (
        <svg viewBox="0 0 24 24" className="icon-red">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
      ),
      items: [
        "مخاوف التزييف العميق (Deepfakes)",
        "إشكالات حقوق الملكية الفكرية",
        "احتمالية التحيز في النتائج",
      ],
    },
  ];

  return (
    <section className="ethics-section" id="ethics" dir="rtl">
      <div className="ethics-container">
        <h2 className="ethics-heading">منهجية العمل والأخلاقيات</h2>

        <div className="ethics-grid">
          {data.map((box, index) => (
            <div key={index} className="ethics-card">
              <div className="card-header">
                <span className="header-icon">{box.icon}</span>
                <h3 className="card-title">{box.title}</h3>
              </div>
              <ul className="items-list">
                {box.items.map((item, i) => (
                  <li key={i} className="list-item">
                    <svg viewBox="0 0 24 24" className="check-icon">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="M9 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="logic-box">
          <h3 className="logic-title">
            <svg viewBox="0 0 24 24" className="cpu-icon">
              <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
              <rect x="9" y="9" width="6" height="6" />
              <line x1="9" y1="1" x2="9" y2="4" />
              <line x1="15" y1="1" x2="15" y2="4" />
              <line x1="9" y1="20" x2="9" y2="23" />
              <line x1="15" y1="20" x2="15" y2="23" />
              <line x1="20" y1="9" x2="23" y2="9" />
              <line x1="20" y1="15" x2="23" y2="15" />
              <line x1="1" y1="9" x2="4" y2="9" />
              <line x1="1" y1="15" x2="4" y2="15" />
            </svg>
            مبدأ العمل التقني
          </h3>
          <p className="logic-description">
            تعتمد الأدوات المستخدمة في هذا الموقع على نماذج الانتشار (Diffusion
            Models)، حيث تبدأ العملية من ضجيج رقمي عشوائي يتم تنقيته تدريجياً
            بناءً على الأوامر النصية (Prompts) للوصول إلى النتيجة النهائية عالية
            الدقة.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIEthics;
