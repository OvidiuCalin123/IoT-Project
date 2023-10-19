import { React, useState } from "react";
import Card from "./card";
import { dataMeniulStandard } from "./dataMeniulStandard";
import { dataMeniulZilei } from "./dataMeniulZilei";

export const Meniu = () => {
  const [changeMenuData, setChangeMenuData] = useState(dataMeniulZilei);
  return (
    <div className="menu-layout">
      <div className="parent">
        <a
          className="child"
          onClick={() => {
            setChangeMenuData(dataMeniulZilei);
          }}
        >
          Meniul zilei
        </a>
        <a
          className="child"
          onClick={() => {
            setChangeMenuData(dataMeniulStandard);
          }}
        >
          Meniul standard
        </a>
      </div>
      <div className="menu-data">
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
