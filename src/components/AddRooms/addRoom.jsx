import React from "react";
import Form from "react-bootstrap/Form";
import { IoCloseCircle } from "react-icons/io5";
import defaultProfile from "../../assets/default.jpg";
import { MdEdit } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { useAdminContext } from "../../store/adminContext";
import { useHotel } from "../../store/hotelContext";
import { useAuth } from "../../store/authContext";

const AddRoom = () => {
  const navigate = useNavigate();
  const { handleRoom, newRoom, addNewRoom } = useAdminContext();
  const { errors, requesting } = useAuth();
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="reserve filters addAdmin">
      <div className="rContainer hContainer">
        <IoCloseCircle className="rClose" onClick={() => navigate(-2)} />
        <p className="rHeading p-0 m-0">Add Rooms</p>
        <div className="p-2">
          <Form
            className="mt-0"
            onChange={(e) => handleRoom(e, state)}
            onSubmit={(e) => addNewRoom(e, state)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <Form.Group className="mt-3">
                <Form.Label className="mb-0">Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title"
                  name="title"
                  value={newRoom.title}
                />
              </Form.Group>
              <Form.Group className="mt-3">
                <Form.Label className="mb-0">Price</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="price"
                  name="price"
                  value={newRoom.price}
                />
              </Form.Group>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <p className="fieldError">{errors.title && errors.title}</p>
              <p className="fieldError">{errors.price && errors.price}</p>
            </div>
            <Form.Group className="mt-3">
              <Form.Label className="mb-0">Max People</Form.Label>
              <Form.Control
                type="number"
                placeholder="maximum people"
                name="maxPeople"
                value={newRoom.maxPeople}
              />
            </Form.Group>
            <p className="fieldError">{errors.maxPeople && errors.maxPeople}</p>
            <Form.Group className="mt-3">
              <Form.Label className="mb-0">Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="description"
                name="desc"
                style={{ height: "100px" }}
                value={newRoom.desc}
              />
            </Form.Group>
            <p className="fieldError">{errors.desc && errors.desc}</p>
            <Form.Group className="mt-3">
              <Form.Label className="mb-0">Room Numbers</Form.Label>
              <Form.Control
                type="text"
                placeholder="room numbers separated by comma(,)"
                name="rooms"
                value={newRoom.rooms}
              />
            </Form.Group>

            <button type="submit" className="rButton">
              {requesting ? (
                <i className="fa fa-spinner fa-spin"></i>
              ) : (
                "Add Room"
              )}
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddRoom;
