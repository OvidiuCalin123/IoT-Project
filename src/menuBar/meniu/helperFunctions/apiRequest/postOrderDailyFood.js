export const postOrderDailyFood = (
  token,
  selectedStandardCards,
  setUpdateFlag,
  setOrderedFoodButtonPressed,
  setShowOrderConfirmationModel
) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(selectedStandardCards),
    mode: "cors",
  };
  setOrderedFoodButtonPressed(true);

  fetch(`https://localhost:7239/Daily`, requestOptions).then((response) => {
    console.log(response.status);
    if (response.status === 200) {
      setUpdateFlag(true);
      setOrderedFoodButtonPressed(false);
      const x = document.getElementById("snackbar");
      x.className = x.className.replace("notshow", "show");
      return response.json();
    } else if (response.status === 404) {
      throw new Error("Resource not found");
    } else if (response.status === 500) {
      throw new Error("Internal server error");
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  });
};
