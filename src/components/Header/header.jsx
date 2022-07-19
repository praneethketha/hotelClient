import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authContext";
import cookie from "react-cookies";

const Header = () => {
  const { handleLogOut } = useAuth();

  const navigate = useNavigate();

  const handleBookNow = () => {
    if (cookie.load("token")) {
      navigate("hotels");
    } else {
      navigate("login");
    }
  };

  return (
    <header className="header py-2 bg-dark text-white fixed-top">
      <div className="d-flex align-items-center w-85 mx-auto justify-content-between">
        <section>
          <NavLink to="/" className="nav-link logo">
            <img src={logo} alt="logo" />
            Rentea
          </NavLink>
        </section>
        <section className="d-flex justify-content-center align-items-center">
          <ul className="nav col-12 col-lg-auto ml-lg-auto justify-content-space-between ">
            <li>
              <NavLink to="hotels" className="nav-link mx-2 text-white">
                Hotels
              </NavLink>
            </li>
            {cookie.load("token") && (
              <li>
                <NavLink to="/profile" className="nav-link mx-2 text-white">
                  Profile
                </NavLink>
              </li>
            )}
          </ul>
          {cookie.load("token") ? (
            <button
              onClick={handleLogOut}
              type="button"
              className="btn btn-outline-light ms-3 book-now"
            >
              Log Out
            </button>
          ) : (
            <button
              onClick={handleBookNow}
              type="button"
              className="btn btn-outline-light ms-3 book-now"
            >
              Book Now
            </button>
          )}
        </section>
      </div>
    </header>
  );
};

export default Header;
