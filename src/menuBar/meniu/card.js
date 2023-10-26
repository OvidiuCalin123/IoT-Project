import React, { useState } from "react";
import "./meniuStyles.css";

const Card = ({ name, description, priceForUPT, priceForOutsiders }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="card">
      <div style={{ maxWidth: "20rem", paddingRight: "1rem" }}>
        <h2>{name}</h2>
        <p className="description">{description}</p>
        <div className="price-in-card">
          <b>Preț: </b>
          <p className="price-upt">{priceForUPT} RON</p>
          <p className="price-outsiders not-available-price">
            {priceForOutsiders} RON
          </p>
        </div>
      </div>
      <div
        className="food-picture"
        style={{
          minWidth: "15rem",
          minHeight: "10rem",
          maxWidth: "15rem",
          maxHeight: "10rem",
          backgroundColor: "blue",
          borderRadius: "5%",
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          cursor: "pointer",
        }}
        onClick={() => document.getElementById("imageInput").click()}
      >
        <input
          type="file"
          id="imageInput"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
};

export default Card;
