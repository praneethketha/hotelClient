import React from "react";

import { Link } from "react-router-dom";
import "./sidebar.css";

const ProfileSidebar = () => {
  return (
    <div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <Link className="sidebar-list-link" to="">
            <i className="fa-solid fa-circle-user pe-2 ps-2"></i>
            Profile
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="sidebar-list-link" to="timeline">
            <i className="fa-solid fa-clock pe-2 ps-2"></i>
            TimeLine
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="sidebar-list-link" to="edit">
            <i className="fa-solid fa-pen-to-square pe-2 ps-2"></i>
            Edit-Profile
          </Link>
        </li>
        <li className="sidebar-list-item">
          <Link className="sidebar-list-link" to="change-password">
            <i className="fa-solid fa-key pe-2 ps-2"></i>
            Change Password
          </Link>
        </li>
        <li className="sidebar-list-item  deactivate">
          <Link className="sidebar-list-link" to="deactivate">
            <i className="fa-solid fa-circle-xmark pe-2 ps-2"></i>
            Deactivate
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileSidebar;
