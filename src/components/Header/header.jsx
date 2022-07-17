import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className="header p-3 bg-dark text-white">
      <div>
        <div className="d-flex flex-wrap align-items-center me-auto justify-content-lg-end">
          <a href="#" className="nav-link  me-auto logo">
            Rentea
          </a>
          <ul className="nav col-12 col-lg-auto ml-lg-auto justify-content-space-between ">
            <li>
              <a href="#" className="nav-link px-2 text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-5 text-white">
                Rooms
              </a>
            </li>
          </ul>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-5 book-now"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
