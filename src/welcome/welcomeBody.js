import React, { useState } from "react";
import "../App.css";
import "./headerMenuStyles.css";
import { WelcomeNavBar } from "../welcome/Welcome";
import { Contact } from "../menuBar/contact";
import { Orar } from "../menuBar/orar";
import { Meniu } from "../menuBar/meniu/meniu";
import uptCantinaPhoto from "../designFiles/pozaCantinaUPT.jpg";
import { MeniulZilei } from "../menuBar/meniu/MeniulZilei";

export const WelcomeBody = () => {
  const [showContent, setShowContent] = useState("welcome");

  return (
    <div>
      <WelcomeNavBar
        setShowContent={setShowContent}
        showContent={showContent}
      />
      {showContent === "welcome" && (
        <div>
          <div className="boldWelcome">
            Bine ați venit la CantinaUPT – o parte din istoria Universității
            Politehnica Timișoara din 1930!
          </div>
          <div className="poza-cantina-upt">
            <img
              src={uptCantinaPhoto}
              alt="poza Cantina"
              className="poza-cantina"
            />
          </div>
        </div>
      )}
      {showContent === "orar" && <Orar />}
      {showContent === "contact" && <Contact />}
      {showContent === "meniu" && <Meniu setShowContent />}
      {showContent === "meniulZilei" && <MeniulZilei setShowContent />}
    </div>
  );
};
