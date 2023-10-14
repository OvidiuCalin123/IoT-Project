import { LogInForm } from "./logInForm";
import { NavBar } from "../welcome/NavBar";

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
