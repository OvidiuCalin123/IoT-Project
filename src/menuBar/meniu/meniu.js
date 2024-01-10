import React, { useState, useRef, useEffect } from "react";
import { ShowMenuCards } from "./helperFunctions/showMenuCards/showMenuCards";
import { getDailyMenu } from "./helperFunctions/apiRequest/getDailyMenu";
import { getStandardMenu } from "./helperFunctions/apiRequest/getStandardMenu";
import { setMaxHeight } from "./helperFunctions/getScreenMaxHeight";
import Modal from "./modalOperations";
import { getIsAdmin } from "./helperFunctions/apiRequest/getIsAdmin";
import { deleteDailyMenuItems } from "./helperFunctions/apiRequest/deleteDailyMenuItems";
import { deleteStandardMenuItems } from "./helperFunctions/apiRequest/deleteStandardMenuItems";
import { postOrderDailyFood } from "./helperFunctions/apiRequest/postOrderDailyFood";
import { postOrderStandardFood } from "./helperFunctions/apiRequest/postOrderStandardFood";
import { OrderConfirmation } from "./toast";

export const Meniu = () => {
  const [menuDataDaily, setMenuDataDaily] = useState([]);
  const [menuDataStandard, setMenuDataStandard] = useState([]);
  const [showVisualMenuSelected, setShowVisualMenuSelected] =
    useState("meniulZilei");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [useAddModal, setAddModal] = useState(false);
  const [useDeleteModal, setDeleteModal] = useState(false);
  const [isUserAdmin, setIsUserAdmin] = useState(false);
  const [updateFlag, setUpdateFlag] = useState(false);
  const [handleOrderRefresh, setHandleOrderRefresh] = useState(false);
  const [selectedCardsPK, setSelectedCardsPK] = useState([]);
  const [selectedStandardCardsPK, setSelectedStandardCardsPK] = useState([]);
  const [isUPT, setIsUPT] = useState(null);
  const [orderedFoodButtonPressed, setOrderedFoodButtonPressed] =
    useState(false);
  const [showOrderConfirmationModal, setShowOrderConfirmationModel] =
    useState(false);

  const handleDelete = () => {
    const token = localStorage.getItem("accessToken");

    if (showVisualMenuSelected === "meniulZilei") {
      deleteDailyMenuItems(token, selectedCardsPK);
    } else {
      deleteStandardMenuItems(token, selectedStandardCardsPK);
    }

    setUpdateFlag(true);
  };

  const handleOrder = () => {
    const token = localStorage.getItem("accessToken");
    if (showVisualMenuSelected === "meniulZilei") {
      setSelectedStandardCardsPK([]);
      postOrderDailyFood(
        token,
        selectedCardsPK,
        setUpdateFlag,
        setOrderedFoodButtonPressed,
        setShowOrderConfirmationModel
      );
      setSelectedCardsPK([]);
    } else if (showVisualMenuSelected === "meniulStandard") {
      setSelectedCardsPK([]);
      postOrderStandardFood(
        token,
        selectedStandardCardsPK,
        setUpdateFlag,
        setOrderedFoodButtonPressed,
        setShowOrderConfirmationModel
      );
      setSelectedStandardCardsPK([]);
    }
  };

  const setSelectedCardsPrimaryKey = ({
    cardPrimaryKey,
    isCheckBoxSelected,
    menuType,
  }) => {
    if (isCheckBoxSelected === true) {
      if (menuType === "daily") {
        setSelectedCardsPK((prev) => [...prev, cardPrimaryKey]);
      } else {
        setSelectedStandardCardsPK((prev) => [...prev, cardPrimaryKey]);
      }
    } else {
      if (menuType === "daily") {
        setSelectedCardsPK((prev) =>
          prev.filter((id) => id !== cardPrimaryKey)
        );
      } else {
        setSelectedStandardCardsPK((prev) =>
          prev.filter((id) => id !== cardPrimaryKey)
        );
      }
    }
  };

  const menuDataRef = useRef(null);

  const getIsUPT = (isUserUPT) => {
    setIsUPT(isUserUPT);
  };

  const getIsUserAdmin = (isUserAdmin) => {
    setIsUserAdmin(isUserAdmin);
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    getIsAdmin(token, getIsUserAdmin);
    getDailyMenu(token, setMenuDataDaily, getIsUPT);
    getStandardMenu(token, setMenuDataStandard);
    setMaxHeight(menuDataRef);
    setUpdateFlag(false);
  }, [updateFlag, handleOrderRefresh]);

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
        {<OrderConfirmation />}
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
        {isUserAdmin ? (
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
              onClick={handleDelete}
            >
              Șterge
            </button>
          </div>
        ) : isUPT ? (
          <button
            style={{
              backgroundColor: "rgb(10, 236, 175)",
              fontWeight: "bold",
              borderRadius: "10%",
              borderColor: "transparent",
              padding: "0.5rem",
              marginTop: "0.5rem",
            }}
            onClick={() => {
              handleOrder();
            }}
          >
            Rezervă!
          </button>
        ) : (
          <div></div>
        )}{" "}
        {handleOrderRefresh}
      </div>
      {handleOrderRefresh}
      <div className="menu-data" ref={menuDataRef}>
        <ShowMenuCards
          showVisualMenuSelected={showVisualMenuSelected}
          menuDataDaily={menuDataDaily}
          menuDataStandard={menuDataStandard}
          isUPT={isUPT}
          isUserAdmin={isUserAdmin}
          setSelectedCardsPrimaryKey={setSelectedCardsPrimaryKey}
          updateFlagRefresh={setUpdateFlag}
          orderedFoodButtonPressed={orderedFoodButtonPressed}
        />
      </div>
      <Modal
        isModalOpen={isModalOpen}
        useAddModal={useAddModal}
        useDeleteModal={useDeleteModal}
        closeModal={closeModal}
        handleSaveClick={handleSaveClick}
        menuType={showVisualMenuSelected}
        setUpdateFlag={setUpdateFlag}
      />
    </div>
  );
};
