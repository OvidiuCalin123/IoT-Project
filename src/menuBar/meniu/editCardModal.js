import React, { useState } from "react";
import "./modalOperations.css";
import { updateDailyMenuCard } from "./helperFunctions/apiRequest/putDailyMenu";
import handleRefresh from "./modalOperations";

const EditCardModal = ({
  cardPrimaryKey,
  isModalOpen,
  useDeleteModal,
  closeModal,
  menuType,
  cardData,
}) => {
  const [insertCardData, setInsertCardData] = useState({
    title: cardData.title,
    description: cardData.description,
    priceForUPT: cardData.priceForUPT,
  });

  const onEditCardSave = async () => {
    console.log(cardData);
    if (menuType === "daily") {
      const token = localStorage.getItem("accessToken");
      await updateDailyMenuCard(token, cardPrimaryKey, {
        title: insertCardData.title,
        description: insertCardData.description,
        priceForUPT: insertCardData.priceForUPT,
        priceOutsidersUPT: (insertCardData.priceForUPT * 1.2).toFixed(2),
      });
    } else if (menuType === "standard") {
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleTitleChange = (e) => {
    setInsertCardData({ ...insertCardData, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setInsertCardData({ ...insertCardData, description: e.target.value });
  };

  const handleUptPriceChange = (event) => {
    const inputValue = event.target.value;
    setInsertCardData({
      ...insertCardData,
      priceForUPT: parseFloat(inputValue),
    });
  };

  return (
    <div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="close-title">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2 className="add-menu-title">Editeaza meniu</h2>
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
                    value={insertCardData.title}
                    onChange={handleTitleChange}
                  />
                </div>
                <div className="description-modal">
                  <label className="description-modal-text">Descriere:</label>
                  <textarea
                    className="description-modal-content"
                    id="descriere"
                    name="descriere"
                    value={insertCardData.description}
                    onChange={handleDescriptionChange}
                    cols="40"
                    rows="5"
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
                    value={insertCardData.priceForUPT}
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
                    value={(insertCardData.priceForUPT * 1.2).toFixed(2)}
                    readOnly
                  />
                </div>
              </div>
            </div>

            <div className="save-modal">
              <button
                className="save-modal-button"
                onClick={() => {
                  onEditCardSave();
                  closeModal();
                  handleRefresh();
                }}
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

export default EditCardModal;
