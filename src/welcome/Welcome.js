import React from "react";
import uptHeaderLogo from "../designFiles/Upt_little.png";
import uptCantinaPhoto from "../designFiles/pozaCantinaUPT.jpg";
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
          <a href="meniu">MENIU</a>
          <a href="orar">ORAR</a>
          <a href="despre_noi">DESPRE NOI (echipa noastra, galerie)</a>
          <a href="contact.html">CONTACT</a>
        </nav>
      </header>
      <body>
        <div className="boldWelcome">
          Bine ați venit la CantinaUPT – o parte din istoria Universității
          Politehnica Timișoara din 1930!
        </div>
        <div className="pozaCantinaUPT">
          <img
            src={uptCantinaPhoto}
            alt="poza Cantina"
            className="poza-cantina"
          />
        </div>
      </body>
    </div>
  );
};
