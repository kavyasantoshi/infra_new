import React, { useEffect, useRef } from "react";
import "./styles/AboutSecondSection.css";

const AboutProwess = () => {
  const topRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pw-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (topRef.current) observer.observe(topRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pw-section">

      <div className="pw-top" ref={topRef}>
        <h2 className="pw-title">Prowess</h2>
        <img src="/images/bulb_icon.webp" alt="Bulb" className="pw-bulb" />
        <h3 className="pw-mission-heading">Our Mission</h3>
        <p className="pw-mission-text">
          The main idea was to build a team which will provide services ensuring quality and reliability.
        </p>
      </div>

      <div className="pw-cards" ref={cardsRef}>

        <div className="pw-card">
          <h4 className="pw-card-title">Capability</h4>
          <img src="/images/capability_icon.webp" alt="Capability" className="pw-card-icon" />
          <p className="pw-card-text">
            Our state-of-the-art manufacturing unit in Karnataka, producing 25,000 sq. meters of ACP sheets daily.
          </p>
        </div>

        <div className="pw-divider" />

        <div className="pw-card">
          <h4 className="pw-card-title">Network</h4>
          <img src="/images/network_icon.webp" alt="Network" className="pw-card-icon" />
          <p className="pw-card-text">
            Serving clients throughout India, thanks to our effective partner network on a global scale.
          </p>
        </div>

        <div className="pw-divider" />

        <div className="pw-card">
          <h4 className="pw-card-title">Goodwill</h4>
          <img src="/images/goodwill_icon.webp" alt="Goodwill" className="pw-card-icon" />
          <p className="pw-card-text">
            Over the years we have invested in people, processes & technology to develop the production needed to provide well-researched, cutting-edge solutions.
          </p>
        </div>

      </div>

    </section>
  );
};

export default AboutProwess;