import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "../../components/ProfileSidebar/profileSidebar";

import "./profile.css";

const Profile = () => {
  return (
    <>
      <Container>
        <Row className="profile">
          <Col lg={3} sm={2} xs={2} className="p-0">
            <div className="profile-left">
              <ProfileSidebar />
            </div>
          </Col>
          <Col lg={9} sm={10} xs={10} className="ps-1">
            <div className="profile-right">
              <Outlet></Outlet>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
