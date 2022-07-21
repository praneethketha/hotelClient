import React from "react";

import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";

const ProfileSidebar = () => {
  return (
    <div>
      <ul className="sidebar-list">
        <NavLink className="sidebar-list-item  profile-link " to="">
          <i className="sidebar-icon fa-solid fa-circle-user  pe-2 ps-2"></i>
          <p className="sidebar-heading">Profile</p>
        </NavLink>
        <NavLink className="sidebar-list-item" to="timeline">
          <i className="sidebar-icon fa-solid fa-clock  pe-2 ps-2"></i>
          <p className="sidebar-heading"> TimeLine</p>
        </NavLink>
        <NavLink className="sidebar-list-item" to="edit">
          <i className="sidebar-icon fa-solid fa-pen-to-square  pe-2 ps-2"></i>
          <p className="sidebar-heading">Edit-Profile</p>
        </NavLink>
        <NavLink className="sidebar-list-item" to="change-password">
          <i className="sidebar-icon fa-solid fa-key  pe-2 ps-2"></i>
          <p className="sidebar-heading">Change Password</p>
        </NavLink>
        <NavLink className="sidebar-list-item  deactivate" to="deactivate">
          <i className="sidebar-icon fa-solid fa-circle-xmark  pe-2 ps-2"></i>
          <p className="sidebar-heading">Deactivate</p>
        </NavLink>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
