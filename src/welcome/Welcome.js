import "./menuStyles.css";
import { NavBar } from "./navBar";
export const Welcome = () => {
  return (
    <div>
      <NavBar />
      <header>
        <div>
          <div>
            <img
              src="../../../logo_UPT.jpg"
              alt="CantinaUPT"
              style={{ width: "20%", height: "20%", paddingRight: "2rem" }}
            />
          </div>
          <div class="menu">
            <div>
              <a href="meniu.html" onClick>
                MENIU
              </a>
            </div>
            <div>
              <a href="despre.html">DESPRE NOI (echipa noastra, galerie)</a>
            </div>
            <div>
              <a href="orar.html">ORAR</a>
            </div>
            <a href="contact.html">CONTACT</a>
          </div>
        </div>
      </header>
    </div>
  );
};
