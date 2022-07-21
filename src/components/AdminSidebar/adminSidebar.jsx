import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./adminSidebar.css";

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <NavLink to="/" className="ms-4 mt-2 logo">
        Rentea
      </NavLink>
      <ul className="list-style-none admin-sidebar-list ps-2">
        <p className="mb-2 mt-5 ">Dashboard</p>
        <li className="admin-sidebar-list-item pt-2 pb-2 me-2">
          <NavLink className="admin-sidebar-link" to="dashboard">
            <i class="pe-2 ps-4 fa-solid fa-table-cells-large"></i>
            Dashboard
          </NavLink>
        </li>
        <p className="mt-5 mb-2">Pages</p>
        <li className="mb-4 admin-sidebar-list-item pt-2 pb-2 me-2">
          <NavLink className="admin-sidebar-link" to="booking">
            <i className="pe-2 ps-4 fa-solid fa-bookmark"></i>Bookings
          </NavLink>
        </li>
        <li className="mb-4 admin-sidebar-list-item pt-2 pb-2 me-2">
          <NavLink className="admin-sidebar-link" to="hotels">
            <i className="pe-2 ps-4 fa-solid fa-house"></i>Hotels
          </NavLink>
        </li>
        <li className="mb-4 admin-sidebar-list-item pt-2 pb-2 me-2">
          <NavLink className="admin-sidebar-link" to="customers">
            <i className="pe-2 ps-4 fa-solid fa-user-group"></i>Customers
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
