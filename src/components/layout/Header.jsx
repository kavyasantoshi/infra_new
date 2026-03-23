import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 🔥 important
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Interiors", path: "/interiors" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="nav-bar">
      <div className="nav-content">

        {/* LOGO */}
        <div className="logo-container">
          <img src="/images/GitArtha.webp" alt="Logo" className="logo-image" />
        </div>

        {/* HAMBURGER */}
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* NAV LINKS */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.name}
              className={`nav-link ${
                location.pathname === item.path ? "active" : ""
              }`}
              onClick={() => {
                setMenuOpen(false);
                navigate(item.path);
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Header;
