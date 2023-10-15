import React from "react";
import "../App.css";
import "./menuStyles.css";
import uptHeaderLogo from "../designFiles/Upt_little.png";

export const WelcomeNavBar = ({ setShowContent, showContent }) => {
  return (
    <div>
      <header id="header-welcome">
        <div className="cantina-link" onClick={() => setShowContent("welcome")}>
          <h2>Cantina</h2>
          <img src={uptHeaderLogo} alt="Cantina Logo" className="header-logo" />
        </div>
        <nav className="menu">
          <div style={{ paddingRight: "3rem" }}>
            <a
              className={
                showContent === "meniu" ? "tab-selected" : "tab-unselected"
              }
              onClick={() => setShowContent("meniu")}
            >
              <p>MENIU</p>
            </a>
          </div>
          <div style={{ paddingRight: "3rem" }}>
            <a
              className={
                showContent === "orar" ? "tab-selected" : "tab-unselected"
              }
              onClick={() => setShowContent("orar")}
            >
              <p>ORAR</p>
            </a>
          </div>
          <div style={{ paddingRight: "3rem" }}>
            <a
              className={
                showContent === "contact" ? "tab-selected" : "tab-unselected"
              }
              onClick={() => {
                setShowContent("contact");
              }}
            >
              <p>CONTACT</p>
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};
