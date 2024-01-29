import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const Logo = "< Shrabya />";

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 50;

      if (scrollPosition > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-logo"><a href="#">{Logo}</a></div>
      <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
      <li className="nav-list">
          <a href="#">Home</a>
        </li>
        <li className="nav-list">
          <a href="#About">About</a>
        </li>
        <li className="nav-list">
          <a href="#Projects">Projects</a>
        </li>
        <li className="nav-list">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <>
            <span className="cross-icon">✕</span>
          </>
        ) : (
          <>
            <span className="toggle-icon">☰</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;