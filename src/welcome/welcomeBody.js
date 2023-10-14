import React from "react";
import "../App.css";
import "./menuStyles.css";
import { Welcome } from "../welcome/Welcome";
import uptCantinaPhoto from "../designFiles/pozaCantinaUPT.jpg";

export const WelcomeBody = () => {
  return (
    <div>
      <Welcome />
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
