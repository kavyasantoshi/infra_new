import React from "react";
import { Mail, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./styles/Footer.css";

const BuildingIllustration = () => (
  <svg
    viewBox="0 0 260 200"
    xmlns="http://www.w3.org/2000/svg"
    className="footer-building-svg"
  >
    <defs>
      <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#0d1b26" />
        <stop offset="100%" stopColor="#1a3245" />
      </linearGradient>
      <linearGradient id="buildA" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e3a50" />
        <stop offset="100%" stopColor="#152c3e" />
      </linearGradient>
      <linearGradient id="buildB" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#243f55" />
        <stop offset="100%" stopColor="#1a3245" />
      </linearGradient>
      <linearGradient id="buildC" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1b3448" />
        <stop offset="100%" stopColor="#122436" />
      </linearGradient>
    </defs>
    <rect width="260" height="200" fill="url(#skyGrad)" />
    {[
      [20, 18],
      [55, 12],
      [90, 22],
      [130, 8],
      [170, 15],
      [210, 10],
      [240, 20],
      [15, 40],
      [245, 38],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="1" fill="#C9A84C" opacity="0.5" />
    ))}
    <circle cx="220" cy="28" r="10" fill="#1a3245" />
    <circle cx="215" cy="24" r="10" fill="#243f55" opacity="0.6" />
    <circle cx="224" cy="22" r="7" fill="#C9A84C" opacity="0.15" />
    <rect x="0" y="110" width="30" height="90" fill="#112233" opacity="0.6" />
    <rect x="28" y="95" width="22" height="105" fill="#0f2030" opacity="0.6" />
    <rect
      x="210"
      y="100"
      width="28"
      height="100"
      fill="#112233"
      opacity="0.6"
    />
    <rect x="236" y="88" width="24" height="112" fill="#0f2030" opacity="0.6" />
    <rect x="108" y="40" width="44" height="160" fill="url(#buildA)" />
    <polygon points="130,20 118,42 142,42" fill="#C9A84C" opacity="0.7" />
    <line
      x1="130"
      y1="10"
      x2="130"
      y2="22"
      stroke="#C9A84C"
      strokeWidth="1.5"
      opacity="0.5"
    />
    {[50, 62, 74, 86, 98, 110, 122, 134, 146, 158, 170].map((y, i) => (
      <g key={i}>
        <rect
          x="114"
          y={y}
          width="8"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 3 === 0 ? "0.55" : "0.2"}
        />
        <rect
          x="126"
          y={y}
          width="8"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 2 === 0 ? "0.45" : "0.15"}
        />
        <rect
          x="138"
          y={y}
          width="8"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 4 === 0 ? "0.5" : "0.2"}
        />
      </g>
    ))}
    <rect x="50" y="75" width="55" height="125" fill="url(#buildB)" />
    {[82, 94, 106, 118, 130, 142, 154, 166, 178].map((y, i) => (
      <g key={i}>
        <rect
          x="56"
          y={y}
          width="7"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 2 === 0 ? "0.4" : "0.15"}
        />
        <rect
          x="67"
          y={y}
          width="7"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 3 === 0 ? "0.45" : "0.12"}
        />
        <rect
          x="78"
          y={y}
          width="7"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 2 !== 0 ? "0.4" : "0.18"}
        />
        <rect
          x="89"
          y={y}
          width="7"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 3 !== 0 ? "0.35" : "0.1"}
        />
      </g>
    ))}
    <rect x="155" y="82" width="55" height="118" fill="url(#buildC)" />
    {[90, 102, 114, 126, 138, 150, 162, 174].map((y, i) => (
      <g key={i}>
        <rect
          x="161"
          y={y}
          width="7"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 3 === 0 ? "0.4" : "0.15"}
        />
        <rect
          x="172"
          y={y}
          width="7"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 2 === 0 ? "0.38" : "0.12"}
        />
        <rect
          x="183"
          y={y}
          width="7"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 3 !== 0 ? "0.42" : "0.18"}
        />
        <rect
          x="194"
          y={y}
          width="7"
          height="7"
          rx="1"
          fill="#C9A84C"
          opacity={i % 2 !== 0 ? "0.35" : "0.1"}
        />
      </g>
    ))}
    <rect x="0" y="196" width="260" height="4" fill="#C9A84C" opacity="0.18" />
    <ellipse cx="130" cy="198" rx="80" ry="6" fill="#C9A84C" opacity="0.06" />
  </svg>
);

const Footer = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socialIcons = [
    {
      icon: <Mail size={16} />,
      url: "mailto:info@gitartha.com",
      label: "Mail",
    },
    {
      icon: <Instagram size={16} />,
      url: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <Linkedin size={16} />,
      url: "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: <MessageCircle size={16} />,
      url: "https://wa.me/0000000000",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-logo-box">
            <img
              src="/images/gitartha-logo.svg"
              alt="Gitartha Logo"
              className="footer-logo-img"
            />
          </div>
          <p className="footer-desc">
            Building landmark spaces where architecture meets ambition.
          </p>
        </div>

        {/* CENTER */}
        <div className="footer-center">
          <nav className="footer-links">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className="footer-link"
                onClick={() => navigate(link.path)}
              >
                {link.name}
              </button>
            ))}
          </nav>
          <div className="footer-social">
            {socialIcons.map((s, i) => (
              <a
                key={i}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="social-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <BuildingIllustration />
        </div>
      </div>

      <div className="footer-copyright">
        © {new Date().getFullYear()} GITARTHA Realty & Infra. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
