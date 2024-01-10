import "./toast.css";
export const OrderConfirmation = () => {
  setTimeout(() => {
    const x = document.getElementById("snackbar");
    if (x) {
      if (x.className === "show")
        x.className = x.className.replace("show", "notshow");
    }
  }, 4000);
  return (
    <div className="notshow" id="snackbar">
      Comanda a fost preluată!
    </div>
  );
};
