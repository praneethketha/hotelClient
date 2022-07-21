import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "./header.css";
import logo from "./../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/authContext";
import cookie from "react-cookies";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = useAuth();

  const handleBookNow = () => {
    if (cookie.load("token")) {
      navigate("hotels");
    } else {
      navigate("login");
    }
  };
  return (
    <div>
      <nav class=" navbar navbar-expand-lg navbar-light bg-dark">
        <div class="container">
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
            Rentea
          </NavLink>
          <button
            class="navbar-toggler bg-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink to="hotels" className="nav_link active text-white">
                Hotels
              </NavLink>

              {cookie.load("token") && (
                <NavLink to="/profile" className="nav_link  text-white">
                  Profile
                </NavLink>
              )}
              {cookie.load("token") ? (
                <button
                  onClick={handleLogout}
                  type="button"
                  className="book-now btn"
                >
                  Log Out
                </button>
              ) : (
                <button
                  onClick={handleBookNow}
                  type="button"
                  className="book-now btn"
                >
                  Book Now
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
