import React from 'react';
import '../Styles/Team.css';

const Team = () => {
  const teamMembers = [
    { name: "هدى حاج بكور", role: "  مطورة الواجهات" },
    { name: "سديم كيفو", role: "مصمم الهوية البصرية" },
    { name: "غنى جندلي ", role: "مهندس توليد الصور AI" },
    { name: "جود الركاض", role: "مهندس معالجة الصور" },
    { name: "  هدى المصري", role: "منتج ومحرر الفيديو" },
    { name: "ميس الأيوبي  ", role: "كاتب المحتوى والبحث" },
    { name: "لجين سوادي ", role: "مسؤول التوثيق والنشر" },
  ];

  return (
    <section className="team-section" id="team">
      <div className="container">
        <h2 className="section-title">فريق المهندسين المبدعين</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-icon">Eng</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;