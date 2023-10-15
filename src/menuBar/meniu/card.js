import React from "react";
import "./meniuStyles.css";

const Card = ({ name, description, price }) => {
  return (
    <div className="card">
      <div style={{ maxWidth: "20rem", paddingRight: "1rem" }}>
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <p>Price: ${price}</p>
      </div>
      <div
        style={{
          minWidth: "15rem",
          minHeight: "10rem",
          maxWidth: "15rem",
          maxHeight: "10rem",
          backgroundColor: "blue",
          borderRadius: "5%",
        }}
      ></div>
    </div>
  );
};

export default Card;
