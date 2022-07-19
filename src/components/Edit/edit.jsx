import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import profile from "../../assets/tom.jpg";
import "./edit.css";
import { useAuth } from "../../store/authContext";

const Edit = () => {
  const { currentUser, signupChange, handleEdit } = useAuth();
  return (
    <div className="edit  pt-3">
      <div className="text-center">
        <NavLink to="" className="text-black">
          Edit-Profile
        </NavLink>
      </div>
      <div className="text-center">
        <img
          src={currentUser.photo}
          alt="profile"
          className="profile-img mt-3"
          width="20%"
        />
      </div>
      <div className="form mt-3">
        <Form onChange={signupChange} onSubmit={handleEdit}>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="name"
              defaultValue={currentUser.name}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Email </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              defaultValue={currentUser.email}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-0">Contact Numbar</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter number"
              name="contact_number"
              defaultValue={currentUser.contact_number}
            />
          </Form.Group>

          <button className="edit-button" type="submit">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
