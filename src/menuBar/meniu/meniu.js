import { React, useState, useRef, useEffect } from "react";
import Card from "./card";
import { dataMeniulStandard } from "./dataMeniulStandard";
import { dataMeniulZilei } from "./dataMeniulZilei";

export const Meniu = () => {
  const [changeMenuData, setChangeMenuData] = useState(dataMeniulZilei);
  const [showVisualMenuSelected, setShowVisualMenuSelected] =
    useState("meniulZilei");

  const menuDataRef = useRef(null);

  useEffect(() => {
    const setMaxHeight = () => {
      if (menuDataRef.current) {
        const viewportHeight = window.innerHeight;
        const menuLayout = menuDataRef.current.parentElement;
        const menuLayoutHeight = menuLayout.getBoundingClientRect().height;

        const maxHeight =
          viewportHeight -
          (menuLayoutHeight - menuDataRef.current.offsetHeight);

        menuDataRef.current.style.maxHeight = `${maxHeight}px`;
      }
    };

    setMaxHeight();
    window.addEventListener("resize", setMaxHeight);

    return () => {
      window.removeEventListener("resize", setMaxHeight);
    };
  }, []);
  return (
    <div className="menu-layout">
      <div className="parent">
        <a
          className={
            showVisualMenuSelected === "meniulZilei" ? "clicked-menu" : "child"
          }
          onClick={() => {
            setChangeMenuData(dataMeniulZilei);
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
            setChangeMenuData(dataMeniulStandard);
            setShowVisualMenuSelected("meniulStandard");
          }}
        >
          Meniul standard
        </a>
      </div>
      <div className="menu-data" ref={menuDataRef}>
        {changeMenuData.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
