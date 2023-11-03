export const getIsAdmin = (token, getIsUserAdmin) => {
  fetch(`https://localhost:7239/api/CheckUserIfAdmin`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: "GET",
    mode: "cors",
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new Error("Resource not found");
      } else if (response.status === 500) {
        throw new Error("Internal server error");
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    })
    .then((data) => {
      getIsUserAdmin(data);
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
    });
};
