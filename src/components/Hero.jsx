import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/1.jpg";
import image5 from "../assets/2.jpg";
// Add more images if needed

function Hero() {
  const images = [image1, image2, image3, image4, image5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <section
      id="hero"
      className="hero"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Capture Your Moments</h1>
          <p>Professional photography & creative services</p>
          <a href="#portfolio" className="btn">View Portfolio</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
