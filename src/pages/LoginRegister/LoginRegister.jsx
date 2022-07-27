import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/authContext";

import "./LoginRegister.css";
const LoginRegister = () => {
  const {
    errors,
    changeText,
    loginChange,
    signupChange,
    handleLogin,
    handleSignUp,
    handleVerify,
    newUser,
  } = useAuth();
  const [addclass, setaddclass] = useState("");
  return (
    <section className="loginPage">
      <div className={`container container1 ${addclass}`} id="container">
        <div className="form-container  sign-up-container">
          <form
            className="login-form"
            onSubmit={(e) => handleLogin(e)}
            onChange={(e) => loginChange(e)}
          >
            <h6 className="brand">RENTEA</h6>
            <p className="para">Welcome Back!!</p>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <Link to="/forgot-password" className="loginforgot ">
              Forgot Password?
            </Link>
            <button className="signin" type="submit">
              {changeText === 1 ? (
                <i className="fa fa-spinner fa-spin"></i>
              ) : (
                "LOGIN"
              )}
            </button>

            <div className="slidingparastwo">
              <p className="loginpara">New to Rentea?</p>
              <p className="ghost" id="signIn" onClick={() => setaddclass("")}>
                Sign Up
              </p>
            </div>
          </form>
        </div>
        <div className="form-container sign-in-container">
          {changeText !== 2 ? (
            <form
              className="login-form"
              onSubmit={(e) => handleSignUp(e)}
              onChange={(e) => signupChange(e)}
            >
              <h6 className="brand">RENTEA</h6>
              <p className="para">Welcome to Rentea</p>
              <input
                value={newUser.name}
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
              />
              <p className="fieldError">{errors.name && errors.name}</p>
              <input
                value={newUser.email}
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <p className="fieldError">{errors.email && errors.email}</p>
              <input
                value={newUser.password}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <p className="fieldError">{errors.password && errors.password}</p>
              <input
                value={newUser.passwordConfirm}
                type="password"
                name="passwordConfirm"
                placeholder="Confirmpassword"
                autoComplete="off"
              />
              <p className="fieldError">
                {errors.passwordConfirm && errors.passwordConfirm}
              </p>
              <button type="submit" className="signup">
                {changeText === 1 ? "SENDING MAIL..." : "SIGN UP"}
              </button>
              <div className="slidingparas">
                <p className="loginpara">Already have an account?</p>
                <p
                  className="ghost"
                  id="signUp"
                  onClick={() => setaddclass("right-panel-active")}
                >
                  Sign In
                </p>
              </div>
            </form>
          ) : (
            <form
              className="login-form"
              onSubmit={(e) => handleVerify(e)}
              onChange={(e) => signupChange(e)}
            >
              <h6 className="brand">RENTEA</h6>
              <p className="para">Verify OTP!!!</p>
              <input
                type="password"
                name="otp"
                value={newUser.otp}
                placeholder="otp"
                autoComplete="off"
              />
              <p className="fieldError">{errors.otp && errors.otp}</p>
              <button type="submit" className="signup">
                VERIFY
              </button>
            </form>
          )}
        </div>
        <div className="overlay-container">
          <div className="overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default LoginRegister;
