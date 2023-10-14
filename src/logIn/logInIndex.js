import { LogInForm } from "./logInForm";
import { NavBar } from "../welcome/navBar";
import "./logInStyles.css";

export const LogInIndex = () => {
  return (
    <div>
      <NavBar />
      <div className="center-log-in-form">
        <LogInForm />
      </div>
    </div>
  );
};
