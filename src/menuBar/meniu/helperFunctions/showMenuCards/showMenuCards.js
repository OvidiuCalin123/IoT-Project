import { v4 as uuidv4 } from "uuid";
import { Card } from "../../card";

export const showMenuCards = (
  showVisualMenuSelected,
  menuDataDaily,
  menuDataStandard,
  isUPT
) => {
  if (showVisualMenuSelected === "meniulZilei") {
    return menuDataDaily.map((item) => (
      <Card
        key={uuidv4()}
        title={item.title}
        description={item.description}
        priceForUPT={item.priceForUPT}
        priceOutsidersUPT={item.priceOutsidersUPT}
        cardPrimaryKey={item.id}
        isUserUPT={isUPT}
      />
    ));
  } else if (showVisualMenuSelected === "meniulStandard") {
    return menuDataStandard.map((item) => (
      <Card
        key={uuidv4()}
        title={item.title}
        description={item.description}
        priceForUPT={item.priceForUPT}
        priceOutsidersUPT={item.priceOutsidersUPT}
        cardPrimaryKey={item.id}
        isUserUPT={isUPT}
      />
    ));
  }
};
