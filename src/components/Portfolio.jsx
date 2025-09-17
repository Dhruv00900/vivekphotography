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

  const next = () => {
    setCenterIndex((prev) => (prev + 1) % portfolioItems.length);
  };

  const prev = () => {
    setCenterIndex((prev) =>
      prev === 0 ? portfolioItems.length - 1 : prev - 1
    );
  };

  const leftIndex = (centerIndex - 1 + portfolioItems.length) % portfolioItems.length;
  const rightIndex = (centerIndex + 1) % portfolioItems.length;

  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Work</h2>
      <div className="carousel-container">
        <button className="nav-button left" onClick={prev}>
          ‹
        </button>
        <div className="carousel">
          {portfolioItems.map((item, index) => {
            let position = "next";
            if (index === centerIndex) position = "center";
            else if (index === leftIndex) position = "left";
            else if (index === rightIndex) position = "right";

            return (
              <div key={item.id} className={`carousel-item ${position}`}>
                <img src={item.src} alt={`Portfolio ${item.id}`} />
              </div>
            );
          })}
        </div>
        <button className="nav-button right" onClick={next}>
          ›
        </button>
      </div>
    </section>
  );
}

export default Portfolio;
