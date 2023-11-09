export const insertDailyMenuCard = (
  token,
  { title, description, priceForUPT, priceOutsidersUPT, image }
) => {
  const apiUrl = `https://localhost:7239/api/DailyMenu`;

  const formData = new FormData();
  console.log({ title, description, priceForUPT, priceOutsidersUPT, image });
  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("priceForUPT", priceForUPT);
  formData.append("priceOutsidersUPT", priceOutsidersUPT);

  return fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
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
      window.location.reload();
      return updatedData;
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
      return Promise.reject(error);
    });
};
