import React from "react";
import "./gallery.css"

const Gallery = () => {
  // Sample images with descriptions
  const galleryItems = [
    { src: "/assets/rangoli.jpeg", description: "Children participating in the Rangoli competition." },
    { src: "/assets/saraswathipooja.jpeg", description: "Prayers performed in the name of god Saraswathi." },
    { src: "/assets/independence.jpeg", description: "Students participated in the Children's Day celebrations." },
    { src: "/assets/republic.jpeg", description: "Kids in the fancy dress competition on Independence Day ." },
    { src: "/assets/sankranthi.jpeg", description: "Students celebrated Sankranthi festival." },
    
  ];

  return (
    <div className="page-container">
      <h1 className="gallery-heading">Saandeepani Archive</h1>
      <div className="gallery-container">
        {galleryItems.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.src} alt={`Gallery ${index}`} className="gallery-image" />
            <p className="gallery-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
