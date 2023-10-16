import React from "react";
import Card from "./card";
import { data } from "./data";

export const Meniu = () => {
  return (
    <div className="menu-layout">
      <div class="parent">
        <div class="child">Meniul zilei</div>
        <div class="child">Meniul standard</div>
      </div>
      <div className="menu-data">
        {data.map((item, index) => (
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
