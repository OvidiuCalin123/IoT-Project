import { useNavigate } from "react-router-dom";
import "../App.css";
import "./register.css";

export const RegisterForm = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/welcome");
  return (
    <div className="box-register">
      <div className="registerStyles">
        <h2 className="register-title">Register</h2>
        <form>
          <div className="mb-3 input-holder">
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
          <div className="mb-3 input-holder">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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
