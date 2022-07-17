import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import ProfileSidebar from "../../components/ProfileSidebar/profileSidebar";

import "./profile.css";

const Profile = () => {
  return (
    <>
      <Header></Header>
      <Container className="profile mt-5">
        <Row>
          <Col className="p-0">
            <div className="profile-left">
              <ProfileSidebar />
            </div>
          </Col>
          <Col className="ps-1">
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
