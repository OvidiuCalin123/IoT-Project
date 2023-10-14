import "../App.css";
import uptHeaderLogo from "../designFiles/Upt_little.png";
export const NavBar = () => {
  return (
    <>
      <head>
        <title>CantinaUPT</title>
      </head>
      <header id="header">
        <div className="container">
          <div className="header-content">
            <div className="header-content-left">
              <h1>Cantina</h1>
              <img
                src={uptHeaderLogo}
                alt="Cantina Logo"
                className="header-logo"
              />
            </div>
            <div className="header-content-right">
              <h5>...since 1930</h5>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
