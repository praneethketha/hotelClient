import React from "react";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import "./changePassword.css";

const ChangePasword = () => {
  return (
    <div>
      <div className="text-center mb-5 pt-5">
        <NavLink to="" className="text-black">
          Change Password
        </NavLink>
      </div>
      <div className="form mt-5">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="mb-1">Old Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="mb-1">New Password </Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label className="mb-1">Confirm Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <button className="edit-button mt-2">Submit</button>
        </Form>
      </div>
    </div>
  );
};

export default ChangePasword;
