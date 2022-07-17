import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import profile from "../../assets/tom.jpg";
import "./edit.css";

const Edit = () => {
  return (
    <div className="edit  pt-3">
      <div className="text-center">
        <NavLink to="" className="text-black">
          Edit-Profile
        </NavLink>
      </div>
      <div className="text-center">
        <img src={profile} className="profile-img mt-3" width="20%" />
      </div>
      <div className="form mt-3">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Name</Form.Label>
            <Form.Control type="email" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Email </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Contact Numbar</Form.Label>
            <Form.Control type="number" placeholder="Enter number" />
          </Form.Group>

          <button className="edit-button">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
