export const updateStandardMenuItem = (
  token,
  id,
  { title, description, priceForUPT, priceOutsidersUPT, picture }
) => {
  const apiUrl = `https://localhost:7239/api/StandardMenu/CardMenu/${id}`;

  const formData = new FormData();

  formData.append("image", picture);
  formData.append("id", id);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("priceForUPT", priceForUPT);
  formData.append("priceOutsidersUPT", priceOutsidersUPT);

  return fetch(apiUrl, {
    method: "PUT",
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
