import React from 'react';
import '../Styles/Team.css';

const Team = () => {
  const teamMembers = [
    { name: "هدي حاج بكور", role: "قائدة الفريق ومطورة الواجهات" },
    { name: "اسم الطالب 2", role: "مصمم الهوية البصرية" },
    { name: "اسم الطالب 3", role: "مهندس توليد الصور AI" },
    { name: "اسم الطالب 4", role: "مهندس معالجة الصور" },
    { name: "اسم الطالب 5", role: "منتج ومحرر الفيديو" },
    { name: "اسم الطالب 6", role: "كاتب المحتوى والبحث" },
    { name: "اسم الطالب 7", role: "مسؤول التوثيق والنشر" },
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