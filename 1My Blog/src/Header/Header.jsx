import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-logo">Joseph Mbugua</h1>
      <nav className="header-nav">
        <a href="/" className="header-nav__link">
          home
        </a>
        <a href="/" className="header-nav__link">
          about
        </a>
        <a href="/" className="header-nav__link">
          skills
        </a>
        <a href="/" className="header-nav__link">
          my projects
        </a>
        <button className="header__resume-btn">my resume</button>
      </nav>
    </header>
  );
};

export default Header;
