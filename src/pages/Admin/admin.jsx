import React from "react";
import { Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { AdminSidebar } from "../../components";
import "./admin.css";

const Admin = () => {
  return (
    <div>
      <Row>
        <Col lg={2} sm={2}>
          <AdminSidebar />
        </Col>
        <Col lg={10} sm={10}>
          <Outlet></Outlet>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
