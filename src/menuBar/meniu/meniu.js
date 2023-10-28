import { React, useState, useRef, useEffect } from "react";
import { showMenuCards } from "./helperFunctions/showMenuCards/showMenuCards";
import { getDailyMenu } from "./helperFunctions/apiRequest/getDailyMenu";
import { getStandardMenu } from "./helperFunctions/apiRequest/getStandardMenu";
import { setMaxHeight } from "./helperFunctions/getScreenMaxHeight";

let isUPT = null;

export const Meniu = () => {
  const [menuDataDaily, setMenuDataDaily] = useState([]);
  const [menuDataStandard, setMenuDataStandard] = useState([]);
  const [showVisualMenuSelected, setShowVisualMenuSelected] =
    useState("meniulZilei");

  const menuDataRef = useRef(null);

  const getIsUPT = (isUserUPT) => {
    isUPT = isUserUPT;
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    getDailyMenu(token, setMenuDataDaily, getIsUPT);
    getStandardMenu(token, setMenuDataStandard);
    setMaxHeight(menuDataRef);
  }, []);

  return (
    <div className="menu-layout">
      <div className="parent">
        <a
          className={
            showVisualMenuSelected === "meniulZilei" ? "clicked-menu" : "child"
          }
          onClick={() => {
            setShowVisualMenuSelected("meniulZilei");
          }}
        >
          Meniul zilei
        </a>
        <a
          className={
            showVisualMenuSelected === "meniulStandard"
              ? "clicked-menu"
              : "child"
          }
          onClick={() => {
            setShowVisualMenuSelected("meniulStandard");
          }}
        >
          Meniul standard
        </a>
      </div>
      <div className="menu-data" ref={menuDataRef}>
        {showMenuCards(
          showVisualMenuSelected,
          menuDataDaily,
          menuDataStandard,
          isUPT
        )}
      </div>
    </div>
  );
};
