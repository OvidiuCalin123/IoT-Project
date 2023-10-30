import React, { useState, useRef, useEffect } from "react";
import { showMenuCards } from "./helperFunctions/showMenuCards/showMenuCards";
import { getDailyMenu } from "./helperFunctions/apiRequest/getDailyMenu";
import { getStandardMenu } from "./helperFunctions/apiRequest/getStandardMenu";
import { setMaxHeight } from "./helperFunctions/getScreenMaxHeight";
import Modal from "./modalOperations";

let isUPT = null;

export const Meniu = () => {
  const [menuDataDaily, setMenuDataDaily] = useState([]);
  const [menuDataStandard, setMenuDataStandard] = useState([]);
  const [showVisualMenuSelected, setShowVisualMenuSelected] =
    useState("meniulZilei");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useAddModal, setAddModal] = useState(false);
  const [useDeleteModal, setDeleteModal] = useState(false);

  const menuDataRef = useRef(null);

  const getIsUPT = (isUserUPT) => {
    isUPT = isUserUPT;
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    getDailyMenu(token, setMenuDataDaily, getIsUPT);
    getStandardMenu(token, setMenuDataStandard);
    setMaxHeight(menuDataRef);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addModal = () => {
    setAddModal(true);
  };

  const deleteModal = () => {
    setDeleteModal(true);
  };

  const handleSaveClick = () => {
    const titlu = document.getElementById("titlu").value;
    const descriere = document.getElementById("descriere").value;
    const pretUPT = document.getElementById("pretUPT").value;
    const pretOutsiders = document.getElementById("pretOutsiders").value;
    const photoFile = document.getElementById("photo").files[0];
  };

  return (
    <div className="menu-layout">
      <div className="parent">
        <div>
          <a
            className={
              showVisualMenuSelected === "meniulZilei"
                ? "clicked-menu"
                : "child"
            }
            onClick={() => setShowVisualMenuSelected("meniulZilei")}
          >
            Meniul zilei
          </a>
          <a
            className={
              showVisualMenuSelected === "meniulStandard"
                ? "clicked-menu"
                : "child"
            }
            onClick={() => setShowVisualMenuSelected("meniulStandard")}
          >
            Meniul standard
          </a>
        </div>
        <div className="add-delete">
          <button
            className="add"
            style={{ marginRight: "0.3rem" }}
            onClick={() => {
              openModal();
              setAddModal(true);
            }}
          >
            Adaugă
          </button>
          <button
            className="delete"
            style={{ marginLeft: "0.1rem" }}
            onClick={() => {
              openModal();
              setDeleteModal(true);
            }}
          >
            Șterge
          </button>
        </div>
      </div>
      <div className="menu-data" ref={menuDataRef}>
        {showMenuCards(
          showVisualMenuSelected,
          menuDataDaily,
          menuDataStandard,
          isUPT
        )}
      </div>
      {/* Use the Modal component here */}
      <Modal
        isModalOpen={isModalOpen}
        useAddModal={useAddModal}
        useDeleteModal={useDeleteModal}
        closeModal={closeModal}
        handleSaveClick={handleSaveClick}
      />
    </div>
  );
};
