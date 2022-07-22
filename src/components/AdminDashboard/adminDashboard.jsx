import React from "react";
import { Col, Row } from "react-bootstrap";
import { useAdminContext } from "../../store/adminContext";
import "./adminDashboard.css";

const AdminDashboard = () => {
  const { activeMenu } = useAdminContext();

  return (
    <div className="dashboard" style={{ width: activeMenu ? "85vw" : "100vw" }}>
      <div className="dashboard-top pt-5">
        <div className="dashboard-top-first">
          <p className="ps-4 pt-2">Total amount</p>
          <h1 className="ps-4 pt-2">₹12,44,736</h1>
        </div>
        <div className="dashboard-top-second">
          <i className="pt-3 ps-4 fa-solid fa-user-group"></i>
          <h4 className="ps-4 pt-2">12,44,736</h4>
          <p className="ps-4 ">Customers</p>
        </div>
        <div className="dashboard-top-third">
          <i className="pt-3 ps-4 fa-solid fa-house"></i>
          <h4 className="ps-4 pt-2">12,44,736</h4>
          <p className="ps-4 ">Hotels</p>
        </div>
        <div className="dashboard-top-fourth">
          <i className="pt-3 ps-4 fa-solid fa-bookmark"></i>
          <h4 className="ps-4 pt-2">12,44,736</h4>
          <p className="ps-4 ">Bookings</p>
        </div>
      </div>
      <div className="dashboard-bottom mt-5"></div>
    </div>
  );
};

export default AdminDashboard;
