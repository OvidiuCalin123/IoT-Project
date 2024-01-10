import React, { useState, useRef } from "react";
import "./meniuStyles.css";
import { updateDailyMenuItemPicture } from "./helperFunctions/apiRequest/putDailyMenuPicture";
import { updateStandardMenuItemPicture } from "./helperFunctions/apiRequest/putStandardMenuPicture";
import { v4 as uuidv4 } from "uuid";
import EditCardModal from "./editCardModal";

export const Card = ({
  title,
  portions,
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
  updateFlagRefresh,
  orderedFoodButtonPressed,
}) => {
  const token = localStorage.getItem("accessToken");
  const [image, setImage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const fileInputRef = useRef();

  const handleRefresh = () => {
    window.location.reload();
  };

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
            portions,
          });
        } else if (menuType === "standard") {
          await updateStandardMenuItemPicture(token, cardPrimaryKey, {
            title,
            description,
            priceForUPT,
            priceOutsidersUPT,
            isUserUPT,
            picture,
            portions,
          });
        }
        handleRefresh();
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
    // if (orderedFoodButtonPressed === true) {
    //   setIsChecked(false);
    // }
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
          <div className="portii">
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {title}
            </h2>
            <div
              style={{
                backgroundColor: "#f5f5f5",
                marginLeft: "1rem",
                borderStyle: "solid",
                padding: "0.25rem",

                paddingRight: "0.5rem",
                paddingLeft: "0.5rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div style={{ fontWeight: "bold" }}>{portions} în stoc</div>
            </div>
          </div>
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

            {!isUserAdmin && isUserUPT ? (
              <div className="checkbox-div" style={{ marginLeft: "1rem" }}>
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
                />
              </div>
            ) : (
              <div></div>
            )}
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
                  cursor: "pointer",
                }}
                alt="NO_IMAGE_FOUND"
                onClick={handleImageUpload}
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
            portions,
          }}
          useAddModal={true}
          menuType={menuType}
          updateFlagRefresh={updateFlagRefresh}
        />
      )}
    </>
  );
};
