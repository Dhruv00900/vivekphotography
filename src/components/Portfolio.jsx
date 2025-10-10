import React, { useState } from "react";
import "../styles/Portfolio.css";

function Portfolio() {
  const portfolioItems = [
    { id: 1, category: "wedding", src: "/images/1.jpg" },
    { id: 2, category: "wedding", src: "/images/2.jpg" },
    { id: 3, category: "event", src: "/images/3.jpg" },
    { id: 4, category: "event", src: "/images/1.jpg" },
    { id: 5, category: "portrait", src: "/images/2.jpg" },
    { id: 6, category: "portrait", src: "/images/3.jpg" },
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const next = () => {
    setCenterIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prev = () => {
    setCenterIndex((prev) =>
      prev === 0 ? filteredItems.length - 1 : prev - 1
    );
  };

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const leftIndex = (centerIndex - 1 + filteredItems.length) % filteredItems.length;
  const rightIndex = (centerIndex + 1) % filteredItems.length;

  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-header">
        <h2>Creative Gallery</h2>
        <div className="shape-divider">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="category-filters">
        {["all", "wedding", "event", "portrait"].map(category => (
          <button
            key={category}
            className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(category);
              setCenterIndex(0);
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="carousel-container">
        <button className="nav-button left" onClick={prev}>
          <div className="nav-arrow"></div>
        </button>
        
        <div className="carousel">
          {filteredItems.map((item, index) => {
            let position = "next";
            if (index === centerIndex) position = "center";
            else if (index === leftIndex) position = "left";
            else if (index === rightIndex) position = "right";

            return (
              <div key={item.id} className={`carousel-item ${position}`}>
                <div className="image-container">
                  <img src={item.src} alt={`Portfolio ${item.id}`} />
                  <div className="image-overlay">
                    <span className="category-tag">{item.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button className="nav-button right" onClick={next}>
          <div className="nav-arrow"></div>
        </button>
      </div>

      <div className="carousel-dots">
        {filteredItems.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === centerIndex ? 'active' : ''}`}
            onClick={() => setCenterIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;