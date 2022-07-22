import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAdminContext } from "../../store/adminContext";
import "./adminSidebar.css";

const AdminSidebar = () => {
  const { activeMenu, setActiveMenu } = useAdminContext();

  return (
    <div>
      <div
        className="admin-sidebar"
        style={{ minWidth: activeMenu ? "15vw" : "6vw" }}
      >
        <div className="d-flex justify-content-between align-content-center pt-4">
          <NavLink
            to="/"
            className="ms-4 rentea-logo"
            style={{ display: activeMenu ? "inline" : "none" }}
          >
            <p
              style={{ display: activeMenu ? "inline" : "none" }}
              className="logo"
            >
              Rentea
            </p>
          </NavLink>
          <FaBars
            className="toggle-button"
            onClick={() => {
              setActiveMenu((prevActiveMenu) => !prevActiveMenu);
            }}
          />
          {/* <i className="toggle-button fa-solid fa-bars"></i> */}
        </div>

        <ul className="list-style-none admin-sidebar-list ps-2">
          <p className="mb-2 mt-5 ">Dashboard</p>
          <li className="admin-sidebar-list-item pt-2 pb-2 me-2">
            <NavLink className="admin-sidebar-link" to="dashboard">
              <i
                className="pe-2 ps-4 fa-solid fa-table-cells-large "
                style={{ textAlign: activeMenu ? "" : "center" }}
              ></i>

              <p
                style={{
                  display: activeMenu ? "inline" : "none",
                }}
                className=""
              >
                Dashboard{" "}
              </p>
            </NavLink>
          </li>
          <p className="mt-5 mb-2">Pages</p>
          <li className="mb-4 admin-sidebar-list-item pt-2 pb-2 me-2">
            <NavLink className=" admin-sidebar-link" to="booking">
              <i className="pe-2 ps-4 fa-solid fa-bookmark"></i>
              <p
                style={{ display: activeMenu ? "inline" : "none" }}
                className=""
              >
                Bookings
              </p>
            </NavLink>
          </li>
          <li className="mb-4 admin-sidebar-list-item pt-2 pb-2 me-2">
            <NavLink className="admin-sidebar-link" to="hotels">
              <i className="pe-2 ps-4 fa-solid fa-house"></i>{" "}
              <p
                style={{ display: activeMenu ? "inline" : "none" }}
                className=""
              >
                Hotels
              </p>
            </NavLink>
          </li>
          <li className="mb-4 admin-sidebar-list-item pt-2 pb-2 me-2">
            <NavLink className="admin-sidebar-link" to="customers">
              <i className="pe-2 ps-4 fa-solid fa-user-group"></i>{" "}
              <p
                style={{ display: activeMenu ? "inline" : "none" }}
                className=""
              >
                Customers
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
