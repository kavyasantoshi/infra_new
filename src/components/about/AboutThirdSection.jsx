import React, { useEffect, useRef } from "react";
import "./styles/AboutThirdSection.css";

const AboutTeam = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("at-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="at-section">
      <div className="at-inner" ref={sectionRef}>

        <div className="at-img-wrap">
          <img src="/images/owner-image.webp" alt="Manikanta KL" className="at-img" />
        </div>

        <div className="at-text">
          <h2 className="at-name">Manikanta KL</h2>
          <h3 className="at-role">(Managing Director)</h3>
          <div className="at-divider" />
          <p className="at-body">
            A passionate and highly motivated individual who went through many managerial
            positions in banking sector before venturing into ACP industry. Prior to "Aldura",
            he had worked with other ACP brand for 8 years achieving many milestones for the
            company. He has done a lot of good to ACP sector by promoting and educating masses
            about benefits & wide applications of ACP. He will be the driving force behind
            Sales and marketing strategies of the company.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutTeam;