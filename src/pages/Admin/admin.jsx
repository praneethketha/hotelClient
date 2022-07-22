import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../../components";
import "./admin.css";

const Admin = () => {
  return (
    <div className="admin d-flex">
      <div>
        <AdminSidebar />
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Admin;
