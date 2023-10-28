import React, { useState } from "react";
import "./meniuStyles.css";
import { updateDailyMenuItemPicture } from "./helperFunctions/apiRequest/putDailyMenuPicture";

export const Card = ({
  title,
  description,
  priceForUPT,
  priceOutsidersUPT,
  cardPrimaryKey,
  isUserUPT,
}) => {
  const token = localStorage.getItem("accessToken");
  const [image, setImage] = useState(null);
  const handleImageUpload = (event) => {
    const picture = event.target.files[0];
    // Ensure that a file was selected
    if (!picture) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageDataUrl = e.target.result;

      fetch(imageDataUrl)
        .then((res) => res.blob())
        .then((imageBlob) => {
          updateDailyMenuItemPicture(token, cardPrimaryKey, {
            title,
            description,
            priceForUPT,
            priceOutsidersUPT,
            picture: imageBlob,
          });
        });
      setImage(imageDataUrl);
    };

    reader.readAsDataURL(picture);
  };

  return (
    <div className="card">
      <div style={{ maxWidth: "20rem", paddingRight: "1rem" }}>
        <h2>{title}</h2>
        <p className="description">{description}</p>
        <div className="price-in-card">
          <b>Preț: </b>
          <p
            className={
              isUserUPT
                ? "price-upt available-price"
                : "price-upt not-available-price"
            }
          >
            {priceForUPT} RON
          </p>
          <p
            className={
              isUserUPT
                ? "price-outsiders not-available-price"
                : "price-outsiders available-price"
            }
          >
            {priceOutsidersUPT} RON
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
