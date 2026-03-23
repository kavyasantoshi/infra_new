import React, { useEffect, useRef } from "react";
import "./styles/AboutFirstSection.css";

const AboutHero = () => {
  const imagesRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ah-visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    [imagesRef, textRef].forEach((r) => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="ah-section">

      <div className="ah-heading-block">
        <h1 className="ah-title">About</h1>
        <div className="ah-title-line" />
      </div>

      <div className="ah-content">

        <div className="ah-images" ref={imagesRef}>
          <div className="ah-img-back">
            <img src="/images/building1.webp" alt="Building exterior" className="ah-img" />
          </div>
          <div className="ah-img-front">
            <img src="/images/building2.webp" alt="Building interior" className="ah-img" />
          </div>
        </div>

        <div className="ah-text" ref={textRef}>
          <p className="ah-eyebrow">Making Our Mark In the Industry</p>
          <h2 className="ah-heading">
            Built on Trust,<br />Driven by Excellence
          </h2>
          <div className="ah-divider" />
          <p className="ah-body">
            In a short span of time, Gitartha has built a reputation for remarkable
            product quality, splendid customer service, and an unwavering business
            code of conduct. Our priority is to be guided by ethics, integrity, and
            transparency at all times.
          </p>
          <p className="ah-body">
            Using only top-grade materials and the latest processes, our team
            consistently meets the highest standards in the realty and infrastructure
            industry — determined to exceed expectations on every project.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutHero;