export const setMaxHeight = (menuDataRef) => {
  if (menuDataRef.current) {
    const viewportHeight = window.innerHeight;
    const menuLayout = menuDataRef.current.parentElement;
    const menuLayoutHeight = menuLayout.getBoundingClientRect().height;

    const maxHeight =
      viewportHeight - (menuLayoutHeight - menuDataRef.current.offsetHeight);

    menuDataRef.current.style.maxHeight = `${maxHeight}px`;
  }
  window.addEventListener("resize", setMaxHeight);

  return () => {
    window.removeEventListener("resize", setMaxHeight);
  };
};
