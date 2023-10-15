import React from "react";
import Card from "./card";
import { data } from "./data";

export const Meniu = () => {
  return (
    <div className="menu-data">
      <h3>Meniul zilei</h3>
      <h4>Meniul standard</h4>
      {data.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};
