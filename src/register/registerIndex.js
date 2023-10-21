import { NavBar } from "../welcome/navBar";
import { RegisterForm } from "./register";

export const RegisterIndex = () => {
  return (
    <div>
      <NavBar />
      <div className="center-register-form">
        <RegisterForm />
      </div>
    </div>
  );
};
