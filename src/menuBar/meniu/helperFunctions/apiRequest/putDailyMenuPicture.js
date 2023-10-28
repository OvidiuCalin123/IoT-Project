export const updateDailyMenuItemPicture = (
  token,
  id,
  { title, description, priceForUPT, priceOutsidersUPT, picture }
) => {
  const apiUrl = `https://localhost:7239/api/DailyMenu/Picture/${id}`;

  const updatedItem = {
    title,
    description,
    priceForUPT,
    priceOutsidersUPT,
    picture,
  };

  const headers = new Headers();
  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Content-Type", "application/json");

  return fetch(apiUrl, {
    method: "PUT",
    mode: "cors",
    headers: headers,
    body: JSON.stringify(updatedItem),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(
          `Error updating menu item: ${response.status} - ${response.statusText}`
        );
      }
    })
    .then((updatedData) => {
      console.log("Menu item updated:", updatedData);
      return updatedData;
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
      return Promise.reject(error);
    });
};
