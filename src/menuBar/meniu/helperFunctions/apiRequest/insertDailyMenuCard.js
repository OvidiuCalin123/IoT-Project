export const insertDailyMenuCard = (
  token,
  { title, description, priceForUPT, priceOutsidersUPT, image, portions }
) => {
  const apiUrl = `https://localhost:7239/api/DailyMenu`;

  const formData = new FormData();

  formData.append("image", image);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("priceForUPT", priceForUPT);
  formData.append("priceOutsidersUPT", priceOutsidersUPT);
  formData.append("portions", portions);

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
      return updatedData;
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
      return Promise.reject(error);
    });
};
