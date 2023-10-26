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
    const token = localStorage.getItem("accessToken");
    fetch(`https://localhost:7239/api/DailyMenu`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else if (response.status === 404) {
          throw new Error("Resource not found");
        } else if (response.status === 500) {
          throw new Error("Internal server error");
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error.message);
      });
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
            name={item.title}
            description={item.description}
            priceForUPT={item.priceForUPT}
            priceForOutsiders={item.priceForOutsiders}
          />
        ))}
      </div>
    </div>
  );
};
