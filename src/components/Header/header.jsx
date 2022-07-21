import React, { useState } from "react";
import { NavLink } from "react-bootstrap";

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
      {/* <header className="header py-2 bg-dark text-white">
        <section className="d-flex w-85 py-3 mx-auto justify-content-between align-items-center">
          <NavLink to="/" className="nav-link logo">
            <img src={logo} alt="logo" />
            Rentea
          </NavLink>
          <CgMenuGridO
            className="menu color-brand"
            onClick={() => setNavOpen(!navOpen)}
          />
          <nav className={`nav ${navOpen ? "open" : "close"}`}>
            <NavLink
              to="hotels"
              className="nav_link active"
              onClick={() => setNavOpen(!navOpen)}
            >
              Hotels
            </NavLink>
            {cookie.load("token") && (
              <NavLink to="/profile" className="nav-link mx-2 text-white">
                Profile
              </NavLink>
            )}

            {cookie.load("token") ? (
              <button
                onClick={handleLogout}
                type="button"
                className=" book-now"
              >
                Log Out
              </button>
            ) : (
              <button
                onClick={handleBookNow}
                type="button"
                className="btn btn-outline-light ms-5 me-2 book-now"
              >
                Book Now
              </button>
            )}
          </nav>
        </section>
      </header> */}

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
                <NavLink to="/profile" className="nav_link mx-2 text-white ">
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

// <header className="fixed-top bg-white">
//   <section className="d-flex w-85 py-3 mx-auto justify-content-between align-items-center">
//     <h3 className="logo m-0 p-0 color-brand">PSPNEWS</h3>
//     <CgMenuGridO
//       className="menu color-brand"
//       onClick={() => setNavOpen(!navOpen)}
//     />
//     <nav className={`nav ${navOpen ? "open" : "close"}`}>
//       <NavLink className="nav_link active" onClick={() => setNavOpen(!navOpen)}>
//         Home
//       </NavLink>
//       <NavLink className="nav_link" onClick={() => setNavOpen(!navOpen)}>
//         Profile
//       </NavLink>
//       <NavLink className="nav_link" onClick={() => setNavOpen(!navOpen)}>
//         About
//       </NavLink>
//       <Button className="brand_btn_2">
//         <MdLogin style={{ marginRight: "5px" }} />
//         Login
//       </Button>
//       <Button className="brand_btn_1">
//         <HiUserAdd style={{ marginRight: "5px" }} />
//         Sign up
//       </Button>
//     </nav>
//   </section>
// </header>;
