import React from "react";
import { Col, Row } from "react-bootstrap";

import "./adminDashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <Row className="dashboard-top pt-5">
        <Col className="dashboard-top-first " lg={3} sm={3}>
          <p className="ps-4 pt-3">Total amount</p>
          <h1 className="ps-4 pt-2">₹12,44,736</h1>
        </Col>
        <Col className="dashboard-top-second " lg={2} sm={3}>
          {" "}
          <i className="pt-4 ps-2 fa-solid fa-user-group user1"></i>
          <h4 className="ps-2 pt-2">12,44,736</h4>
          <p className="ps-2 ">Customers</p>
        </Col>
        <Col className="dashboard-top-third " lg={2} sm={3}>
          <i className="pt-4 ps-2 fa-solid fa-house"></i>
          <h4 className="ps-2 pt-2">12,44,736</h4>
          <p className="ps-2 ">Hotels</p>
        </Col>
        <Col className="dashboard-top-fourth " lg={2} sm={3}>
          <i className="pt-4 ps-2 fa-solid fa-bookmark"></i>
          <h4 className="ps-2 pt-2">12,44,736</h4>
          <p className="ps-2 ">Bookings</p>
        </Col>
      </Row>
      <Row>
        <Col lg={12} className="dashboard-bottom mt-4 "></Col>
      </Row>
    </div>
  );
};

export default AdminDashboard;
