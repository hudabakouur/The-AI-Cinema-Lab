import React, { useState } from "react";
import "../Styles/Lab.css";

const Lab = () => {
  const [activeTool, setActiveTool] = useState(null);

  const tools = [
    {
      id: 1,
      name: "Midjourney & Nano Banana 2",
      category: "توليد الصور الفائق",
      icon: "🎨",
      desc: "استخدام نماذج Gemini 3 Flash Image (Nano Banana 2) لتوليد صور عالية الدقة.",
      moreInfo:
        "تتميز هذه النماذج بالقدرة على فهم التفاصيل المعقدة وتحويل الأوامر النصية إلى لوحات فنية فائق الواقعية بدعم من تقنية SynthID للوسم المائي.",
      link: "https://gemini.google.com",
    },
    {
      id: 2,
      name: "Google Veo & Runway",
      category: "توليد الفيديو السينمائي",
      icon: "🎬",
      desc: "إنتاج فيديوهات بدقة 1080p وفهم عميق للفيزياء الحركية.",
      moreInfo:
        "يعتبر Veo أحدث نموذج من جوجل لتوليد الفيديو، حيث يدعم التناسق البصري الطويل (Cinematic Consistency) ويسمح بالتحكم في زوايا الكاميرا عبر الأوامر النصية.",
      link: "https://deepmind.google/technologies/veo/",
    },
    {
      id: 3,
      name: "Lyria 3 (AI Music)",
      category: "توليد الموسيقى والصوت",
      icon: "🎵",
      desc: "توليد مقاطع صوتية وموسيقى تصويرية عالية الوفاء (Hi-Fi).",
      moreInfo:
        "نموذج Lyria يتيح تصميم ترتيبات موسيقية احترافية وكتابة كلمات الأغاني وتوليد أداء صوتي واقعي يتزامن مع المشاهد السينمائية.",
      link: "https://deepmind.google/technologies/lyria/",
    },
    {
      id: 4,
      name: "CapCut AI Editor",
      category: "المونتاج الذكي",
      icon: "✂️",
      desc: "معالجة الفيديو النهائية ودمج النصوص المتزامنة آلياً.",
      moreInfo:
        "يستخدم CapCut أدوات الذكاء الاصطناعي لقص المشاهد، إزالة الخلفيات، وتوليد التعليق الصوتي (Text-to-Speech) بدقة عالية.",
      link: "https://www.capcut.com",
    },
    {
      id: 5,
      name: "Gemini Live & Multimodal",
      category: "الذكاء الشامل",
      icon: "🧠",
      desc: "تحليل المحتوى البصري والسمعي وتطوير السيناريوهات.",
      moreInfo:
        "يتم استخدام Gemini Live لإدارة الحوارات المعقدة وتحويل أفكار السيناريو إلى مخططات بصرية (Storyboards) قابلة للتنفيذ.",
      link: "https://gemini.google.com",
    },
    {
      id: 6,
      name: "React & Vite",
      category: "البنية التحتية للموقع",
      icon: "💻",
      desc: "بناء واجهة المستخدم التفاعلية بأداء فائق السرعة.",
      moreInfo:
        "توفير تجربة مستخدم سلسة (SPA) مع تحميل سريع للوسائط المتعددة باستخدام تقنيات Vite المتطورة.",
      link: "https://react.dev",
    },
  ];

  const steps = [
    { title: "Input Prompt", desc: "تحليل الأوامر النصية وفهم السياق الفني." },
    {
      title: "Latent Space",
      desc: "المعالجة في الفضاء الرقمي لتمثيل المفاهيم بصرياً.",
    },
    {
      title: "Denoising",
      desc: "إزالة التشويش تدريجياً للوصول للنتيجة النهائية.",
    },
  ];

  return (
    <section className="lab-section" id="lab" dir="rtl">
      <div className="container">
        <h2 className="section-title">داخل المختبر التقني</h2>
        <p className="section-subtitle">
          اضغط على الأداة لاستكشاف المزيد حول منهجية العمل
        </p>

        <div className="lab-grid">
          {tools.map((tool) => (
            <div
              className="lab-card"
              key={tool.id}
              onClick={() => setActiveTool(tool)}
            >
              <div className="card-glass"></div>
              <div className="card-content">
                <div className="tool-icon">{tool.icon}</div>
                <h3>{tool.name}</h3>
                <span className="category-tag">{tool.category}</span>
                <p>{tool.desc}</p>
                <button className="read-more">استكشف التقنية ←</button>
              </div>
            </div>
          ))}
        </div>

        {/* نافذة التفاصيل (Modal) */}
        {activeTool && (
          <div className="modal-overlay" onClick={() => setActiveTool(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActiveTool(null)}>
                ×
              </button>
              <div className="modal-header">
                <span className="modal-icon">{activeTool.icon}</span>
                <h2>{activeTool.name}</h2>
              </div>
              <p className="modal-desc">{activeTool.moreInfo}</p>
              <a
                href={activeTool.link}
                target="_blank"
                rel="noreferrer"
                className="external-link"
              >
                زيارة الموقع الرسمي للأداة
              </a>
            </div>
          </div>
        )}

        <div className="process-wrapper">
          <h2 className="section-title secondary">مختبر المعالجة التقنية</h2>
          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className="process-card">
                <span className="step-number">0{index + 1}</span>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lab;
