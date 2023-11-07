import React, { useState, useRef } from "react";
import "./meniuStyles.css";
import { updateDailyMenuItemPicture } from "./helperFunctions/apiRequest/putDailyMenuPicture";
import { updateStandardMenuItemPicture } from "./helperFunctions/apiRequest/putStandardMenu";
import { v4 as uuidv4 } from "uuid";
import EditCardModal from "./editCardModal";

export const Card = ({
  title,
  description,
  priceForUPT,
  priceOutsidersUPT,
  cardPrimaryKey,
  isUserUPT,
  foodImage,
  menuType,
  isUserAdmin,
  selectedCardsPrimaryKey,
  setSelectedCardsPrimaryKey,
}) => {
  const token = localStorage.getItem("accessToken");
  const [image, setImage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const fileInputRef = useRef();

  const handleImageUpload = async () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const picture = event.target.files[0];

    if (picture) {
      try {
        if (menuType === "daily") {
          await updateDailyMenuItemPicture(token, cardPrimaryKey, {
            title,
            description,
            priceForUPT,
            priceOutsidersUPT,
            isUserUPT,
            picture,
          });
        } else if (menuType === "standard") {
          await updateStandardMenuItemPicture(token, cardPrimaryKey, {
            title,
            description,
            priceForUPT,
            priceOutsidersUPT,
            isUserUPT,
            picture,
          });
        }
        const imageUrl = URL.createObjectURL(picture);
        setImage(imageUrl);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };

  const handleCheckboxChange = () => {
    if (isChecked === true) {
      setIsChecked(false);
      setSelectedCardsPrimaryKey({
        cardPrimaryKey: cardPrimaryKey,
        isCheckBoxSelected: false,
        menuType: menuType,
      });
    } else {
      setIsChecked(true);
      setSelectedCardsPrimaryKey({
        cardPrimaryKey: cardPrimaryKey,
        isCheckBoxSelected: true,
        menuType: menuType,
      });
    }
  };

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  return (
    <>
      <div className="card">
        <div style={{ width: "100%", maxWidth: "20rem", paddingRight: "1rem" }}>
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
        <div>
          {isUserAdmin ? (
            <div>
              <div className="checkbox-div">
                <button className="edit-menu-button" onClick={openEditModal}>
                  Editare Meniu
                </button>
                <input
                  key={uuidv4()}
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  style={{
                    width: "1.85rem",
                    height: "1.85rem",
                    border: "2px solid black",
                    cursor: "pointer",
                  }}
                />{" "}
              </div>{" "}
              <img
                src={`data:image/png;base64,${foodImage}`}
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
                alt="NO_IMAGE_FOUND"
                onClick={handleImageUpload}
              />
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          ) : (
            <div>
              <img
                src={`data:image/png;base64,${foodImage}`}
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
                }}
                alt="NO_IMAGE_FOUND"
              />
            </div>
          )}
        </div>
      </div>
      {isEditModalOpen && (
        <EditCardModal
          cardPrimaryKey={cardPrimaryKey}
          isModalOpen={isEditModalOpen}
          closeModal={closeEditModal}
          cardData={{
            title,
            description,
            priceForUPT,
            priceOutsidersUPT,
            cardPrimaryKey,
            isUserUPT,
            foodImage,
          }}
          useAddModal={true}
          menuType={menuType}
        />
      )}
    </>
  );
};
