import '../styles/Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        <div className="service-item">
          <h3>Wedding Photography</h3>
          <p>Beautifully crafted moments from your special day captured with artistry.</p>
        </div>
        <div className="service-item">
          <h3>Pre-Wedding Shoots</h3>
          <p>Create memories at scenic locations with expert guidance.</p>
        </div>
        <div className="service-item">
          <h3>Cinematography</h3>
          <p>High-quality films that tell your love story in cinematic style.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
