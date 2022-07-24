import React from "react";

import { Outlet } from "react-router-dom";
import { AdminHeader, AdminSidebar } from "../../components";
import "./admin.css";

const Admin = () => {
  return (
    <div className="admin d-flex">
      <div>
        <AdminSidebar />
      </div>

      <div className="admin-content">
        <AdminHeader />
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
