import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authContext";

const Login = () => {
  const { handleLogin, error, handleChange, requesting, setCredentials } =
    useAuth();
  const navigate = useNavigate();
  return (
    <div className="form-container sign-in-container">
      <form
        className="login-form"
        onSubmit={(e) => handleLogin(e)}
        onChange={(e) => handleChange(e, setCredentials)}
      >
        <Link to="/" className="brand">
          Rentea
        </Link>
        <p className="para">Welcome Back!!</p>
        <input type="email" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <p
          className="loginforgot"
          onClick={() =>
            navigate("forgotPassword", { state: "right-panel-active" })
          }
        >
          Forgot Password?
        </p>
        <p className="fieldError">{error}</p>
        <button className="signin" type="submit">
          {requesting ? <i className="fa fa-spinner fa-spin"></i> : "LOGIN"}
        </button>

        <div className="slidingparastwo">
          <p className="loginpara">New to Rentea?</p>
          <p
            className="ghost p-0 m-0"
            id="signIn"
            onClick={() => navigate("signUp", { state: "right-panel-active" })}
          >
            Sign Up
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
