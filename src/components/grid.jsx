import React from "react";
import "../styles/Grid.css";

// Sample images
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/1.jpg";
import img5 from "../assets/2.jpg";
import img6 from "../assets/3.jpg";

function Grid() {
  const photos = [img1, img2, img3, img4, img5, img6];

  return (
    <section id="portfolio" className="portfolio">
      <h2>Gallary</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo} alt={`Photo ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Grid;
