import { useNavigate } from "react-router-dom";
import "../App.css";
import "./logInStyles.css";
import { useState } from "react";
export const LogInForm = () => {
  const navigate = useNavigate();
  const handleGoToWelcome = () => navigate("/welcome");
  const [logInEmail, setLogInEmail] = useState();
  const [logInPassword, setLogInPassword] = useState();
  const [oneClickOnSubmit, setOneClickOnSubmit] = useState(false);
  const handleLogInEmail = (e) => {
    setLogInEmail(e.target.value);
  };
  const handleLogInrPassword = (e) => {
    setLogInPassword(e.target.value);
  };
  const handleLogInSubmit = () => {
    setOneClickOnSubmit(true);
    fetch(
      `https://localhost:7239/api/Login?email=${logInEmail}&password=${logInPassword}`,
      {
        method: "GET",
        mode: "cors",
      }
    )
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
        console.log(data);
        localStorage.setItem("accessToken", data.token);
        handleGoToWelcome();
      })
      .catch((error) => {
        setOneClickOnSubmit(false);
        console.error("Fetch error:", error.message);
      });
  };
  return (
    <div className="box-login">
      <div className="logInStyles">
        <h2 className="log-in-title">Log In</h2>
        <form>
          <div className="mb-3 input-holder-log-in">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleLogInEmail}
            />
          </div>
          <div className="mb-3 input-holder-log-in">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={handleLogInrPassword}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <a href="register" className="go-to-register">
            Don't have an account? Click here!
          </a>
          <button
            type="submit"
            disabled={oneClickOnSubmit}
            className="btn btn-primary"
            onClick={handleLogInSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
