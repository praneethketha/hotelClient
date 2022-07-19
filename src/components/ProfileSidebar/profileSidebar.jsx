import React from "react";

import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const ProfileSidebar = () => {
  return (
    <div>
      <ul className="sidebar-list">
        <NavLink className="sidebar-list-item profile-link" to="">
          <i className="fa-solid fa-circle-user pe-2 ps-2"></i>
          Profile
        </NavLink>
        <NavLink className="sidebar-list-item" to="timeline">
          <i className="fa-solid fa-clock pe-2 ps-2"></i>
          TimeLine
        </NavLink>
        <NavLink className="sidebar-list-item" to="edit">
          <i className="fa-solid fa-pen-to-square pe-2 ps-2"></i>
          Edit-Profile
        </NavLink>
        <NavLink className="sidebar-list-item" to="change-password">
          <i className="fa-solid fa-key pe-2 ps-2"></i>
          Change Password
        </NavLink>
        <NavLink className="sidebar-list-item  deactivate" to="deactivate">
          <i className="fa-solid fa-circle-xmark pe-2 ps-2"></i>
          Deactivate
        </NavLink>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
