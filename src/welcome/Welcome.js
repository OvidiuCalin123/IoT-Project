import React from "react";
import uptHeaderLogo from "../designFiles/Upt_little.png";
import "../App.css";
import "./menuStyles.css";

export const Welcome = () => {
  return (
    <div>
      <header id="header-welcome">
        <a href="/welcome" className="cantina-link">
          <h2>Cantina</h2>
          <img src={uptHeaderLogo} alt="Cantina Logo" className="header-logo" />
        </a>
        <nav className="menu">
          <div className="tab-selected">
            <a href="meniu">MENIU</a>
          </div>
          <div className="tab-selected">
            <a href="orar">ORAR</a>
          </div>
          <div className="tab-selected">
            <a href="contact">CONTACT</a>
          </div>
        </nav>
      </header>
    </div>
  );
};
