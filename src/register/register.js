import { useNavigate } from "react-router-dom";
import "../App.css";
import "./register.css";
import { useState } from "react";

export const RegisterForm = () => {
  const handleClickGoToLogIn = () => navigate("/login");
  const navigate = useNavigate();
  const [registerEmail, setRegisterEmail] = useState();
  const [registerPassword, setRegisterPassword] = useState();
  const [oneClickOnSubmit, setOneClickOnSubmit] = useState(false);
  const handleRegisterName = (e) => {
    setRegisterEmail(e.target.value);
  };
  const handleRegisterPassword = (e) => {
    setRegisterPassword(e.target.value);
  };
  const handleClick = () => {
    setOneClickOnSubmit(true);
    fetch(
      `https://localhost:7239/api/Login?email=${registerEmail}&password=${registerPassword}`,
      {
        method: "POST",
        mode: "cors",
      }
    )
      .then((response) => {
        if (response.status === 200) {
          handleClickGoToLogIn();
        } else if (response.status === 404) {
          throw new Error("Resource not found");
        } else if (response.status === 500) {
          throw new Error("Internal server error");
        } else {
          throw new Error(`Unexpected status code: ${response.status}`);
        }
      })
      .catch((error) => {
        setOneClickOnSubmit(false);
        console.error("Fetch error:", error.message);
      });
  };

  return (
    <div className="box-register">
      <div className="registerStyles">
        <h2 className="register-title">Register</h2>

        <div className="mb-3 input-holder">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleRegisterName}
          />
        </div>
        <div className="mb-3 input-holder">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={handleRegisterPassword}
          />
        </div>
        <div className="mb-3 input-holder">
          <label for="exampleInputPassword2" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <button
          type="submit"
          disabled={oneClickOnSubmit}
          className="btn btn-primary"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
