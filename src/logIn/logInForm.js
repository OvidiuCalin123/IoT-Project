import { useNavigate } from "react-router-dom";
import "../App.css";
import "./logInStyles.css";

export const LogInForm = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/welcome");
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
            className="btn btn-primary"
            onClick={handleClick}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
