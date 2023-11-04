import React, { useState } from "react";
import "./modalOperations.css";
import uploadPhoto from "./upload-image.png";
import { insertDailyMenuCard } from "./helperFunctions/apiRequest/insertDailyMenuCard";

const Modal = ({
  isModalOpen,
  useAddModal,
  useDeleteModal,
  closeModal,
  menuType,
}) => {
  const [uptPrice, setUptPrice] = useState("");
  const [nonUptPrice, setNonUptPrice] = useState("");
  const [image, setImage] = useState(null);

  const [insertCardData, setInsertCardData] = useState({
    title: "",
    description: "",
    priceForUPT: 0.0,
    priceOutsidersUPT: 0.0,
    image: null,
  });

  const onInsertNewCardSave = async () => {
    console.log(insertCardData);

    if (menuType === "meniulZilei") {
      const token = localStorage.getItem("accessToken");
      await insertDailyMenuCard(token, insertCardData);
    } else if (menuType === "meniulStandard") {
    }
  };

  const handleTitleChange = (e) => {
    setInsertCardData({ ...insertCardData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setInsertCardData({ ...insertCardData, description: e.target.value });
  };

  const handleUptPriceChange = (event) => {
    setInsertCardData({
      title: insertCardData.title,
      description: insertCardData.description,
      priceOutsidersUPT: insertCardData.priceOutsidersUPT,
      image: insertCardData.image,
      priceForUPT: event.target.value * 1.0,
    });

    setInsertCardData({
      title: insertCardData.title,
      description: insertCardData.description,
      image: insertCardData.image,
      priceForUPT: event.target.value * 1.0,
      priceOutsidersUPT: event.target.value * 1.2,
    });
    const inputValue = event.target.value;
    const regex = /^\d+(\.\d{0,2})?$/;

    if (regex.test(inputValue)) {
      const newUptPrice = inputValue;
      const newNonUptPrice = (parseFloat(newUptPrice) * 1.2).toFixed(2);
      setUptPrice(newUptPrice);
      setNonUptPrice(newNonUptPrice);
    }
  };

  const handleFileChange = async (event) => {
    const picture = event.target.files[0];
    setInsertCardData({ ...insertCardData, image: picture });
    if (picture) {
      try {
        const imageUrl = URL.createObjectURL(picture);
        setImage(imageUrl);
      } catch (error) {
        console.error("Image upload error:", error);
      }
    }
  };

  return (
    <div>
      {isModalOpen && useAddModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-title">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2 className="add-menu-title">Adaugă meniu</h2>
            </div>
            <div className="columns-modal">
              <div className="column-left-modal">
                <div className="title-modal">
                  <label className="title-modal-text">Titlu:</label>
                  <input
                    className="title-modal-content"
                    type="text"
                    id="titlu"
                    name="titlu"
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="description-modal">
                  <label className="description-modal-text">Descriere:</label>
                  <input
                    className="description-modal-content"
                    type="text"
                    id="descriere"
                    name="descriere"
                    onChange={handleDescriptionChange}
                  />
                </div>
                <div className="price-upt-modal"></div>
              </div>
              <div className="column-right-modal">
                <div className="price-upt-modal">
                  <label className="price-upt-modal-text">Preț UPT:</label>
                  <input
                    className="price-upt-modal-content"
                    type="text"
                    id="pretUPT"
                    name="pretUPT"
                    value={uptPrice}
                    onChange={handleUptPriceChange}
                  />
                </div>
                <div className="price-outsiders-upt-modal">
                  <label className="price-outsiders-modal-text">
                    Preț NON UPT:
                  </label>
                  <input
                    className="price-outsiders-modal-content"
                    type="text"
                    id="pretOutsiders"
                    name="pretOutsiders"
                    value={nonUptPrice}
                  />
                </div>
              </div>
            </div>
            <div className="chose-photo-modal">
              <img
                src={image ?? uploadPhoto}
                alt="poza Cantina"
                className="add-photo"
              />
            </div>
            <label className="add-photo-text">
              <input type="file" onChange={handleFileChange} />
              Adaugă o imagine
            </label>
            <div className="save-modal">
              <button
                className="save-modal-button"
                onClick={onInsertNewCardSave}
              >
                Salvare
              </button>
            </div>
          </div>
        </div>
      )}
      {isModalOpen && useDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2>Șterge meniu</h2>
            <p>Modal content goes here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
