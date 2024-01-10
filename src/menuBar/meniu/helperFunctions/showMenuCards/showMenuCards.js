import React, { useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import { Card } from "../../card";

export const ShowMenuCards = ({
  showVisualMenuSelected,
  menuDataDaily,
  menuDataStandard,
  isUPT,
  isUserAdmin,
  setSelectedCardsPrimaryKey,
  selectedCardsPrimaryKey,
  updateFlagRefresh,
  orderedFoodButtonPressed,
}) => {
  const menuCards = useMemo(() => {
    return showVisualMenuSelected === "meniulZilei"
      ? menuDataDaily.map((item) => (
          <Card
            key={uuidv4()}
            title={item.title}
            portions={item.portions}
            description={item.description}
            priceForUPT={item.priceForUPT}
            priceOutsidersUPT={item.priceOutsidersUPT}
            cardPrimaryKey={item.id}
            isUserUPT={isUPT}
            foodImage={item.picture}
            menuType={"daily"}
            isUserAdmin={isUserAdmin}
            selectedCardsPrimaryKey={selectedCardsPrimaryKey}
            setSelectedCardsPrimaryKey={setSelectedCardsPrimaryKey}
            updateFlagRefresh={updateFlagRefresh}
            orderedFoodButtonPressed={orderedFoodButtonPressed}
          />
        ))
      : showVisualMenuSelected === "meniulStandard"
      ? menuDataStandard.map((item) => (
          <Card
            key={uuidv4()}
            title={item.title}
            portions={item.portions}
            description={item.description}
            priceForUPT={item.priceForUPT}
            priceOutsidersUPT={item.priceOutsidersUPT}
            cardPrimaryKey={item.id}
            isUserUPT={isUPT}
            foodImage={item.picture}
            menuType={"standard"}
            isUserAdmin={isUserAdmin}
            selectedCardsPrimaryKey={selectedCardsPrimaryKey}
            setSelectedCardsPrimaryKey={setSelectedCardsPrimaryKey}
            updateFlagRefresh={updateFlagRefresh}
            orderedFoodButtonPressed={orderedFoodButtonPressed}
          />
        ))
      : [];
  }, [
    showVisualMenuSelected,
    menuDataDaily,
    menuDataStandard,
    isUPT,
    isUserAdmin,
    selectedCardsPrimaryKey,
    updateFlagRefresh,
    orderedFoodButtonPressed,
  ]);

  return <>{menuCards}</>;
};
