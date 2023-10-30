import React from "react";
import "./modalOperations.css";
import uploadPhoto from "./upload-image.png";

const Modal = ({
  isModalOpen,
  useAddModal,
  useDeleteModal,
  closeModal,
  handleSaveClick,
}) => {
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
                  />
                </div>
                <div className="description-modal">
                  <label className="description-modal-text">Descriere:</label>
                  <input
                    className="description-modal-content"
                    type="text"
                    id="descriere"
                    name="descriere"
                  />
                </div>
              </div>
              <div className="column-right-modal">
                <div className="price-upt-modal">
                  <label className="price-upt-modal-text">Preț UPT:</label>
                  <input
                    className="price-upt-modal-content"
                    type="text"
                    id="pretUPT"
                    name="pretUPT"
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
                  />
                </div>
              </div>
            </div>
            <div className="chose-photo-modal">
              <img src={uploadPhoto} alt="poza Cantina" className="add-photo" />{" "}
            </div>
            <label className="add-photo-text">Adaugă o imagine</label>

            <div className="save-modal">
              <button className="save-modal-button" onClick={handleSaveClick}>
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
