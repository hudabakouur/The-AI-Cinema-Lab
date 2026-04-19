import React from 'react';
import '../Styles/Gallery.css';

const Gallery = () => {
  // هذه مصفوفة مؤقتة - زملاؤك سيضعون الصور الحقيقية لاحقاً في مجلد public/assets
  const images = [
    { id: 1, title: "دمشق 2100", tool: "Midjourney", path: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=AI+Damascus" },
    { id: 2, title: "العلا في الشتاء", tool: "DALL-E 3", path: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=AI+AlUla" },
    { id: 3, title: "بورتريه مستقبلي", tool: "Leonardo AI", path: "https://via.placeholder.com/600x400/1a1a1a/ffffff?text=AI+Portrait" },
  ];

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2 className="section-title">المعرض التوليدي</h2>
        <div className="gallery-grid">
          {images.map(img => (
            <div key={img.id} className="gallery-card">
              <img src={img.path} alt={img.title} />
              <div className="gallery-info">
                <h3>{img.title}</h3>
                <span className="badge">{img.tool}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;