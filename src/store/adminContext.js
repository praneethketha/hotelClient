import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./authContext";
import { useHotel } from "./hotelContext";
import * as api from "./../services";
import { useNavigate } from "react-router-dom";

const AdminContext = createContext();

const NEW_HOTEL = {
  name: "",
  description: "",
  basePrice: 0,
  cover_pic: "",
  location: {
    address: "",
    coordinates: [],
  },
  latitude: "",
  longitude: "",
  city: "",
  images: [],
};

const NEW_ROOM = {
  title: "",
  price: 0,
  maxPeople: 0,
  desc: "",
  hotel: "",
  roomNumbers: [],
  rooms: "",
  // roomNumbers: [
  //   {
  //     number: 102,
  //   },
  //   {
  //     number: 202,
  //   },
  // ],
};

export const AdminContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [newHotel, setNewHotel] = useState(NEW_HOTEL);
  const [newRoom, setNewRoom] = useState(NEW_ROOM);
  const { beforeSubmit, setRequesting, handleError } = useAuth();
  const { getAllHotels, getHotel } = useHotel();

  const navigate = useNavigate();

  const handleHotel = (e) => {
    if (e.target.name === "address") {
      setNewHotel((prevState) => ({
        ...prevState,
        location: { ...prevState.location, [e.target.name]: e.target.value },
      }));
    } else {
      setNewHotel((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };

  const handleRoom = (e) => {
    setNewRoom((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const addNewHotel = async (e) => {
    beforeSubmit(e);
    try {
      setRequesting(true);
      const body = {
        ...newHotel,
        location: {
          ...newHotel.location,
          coordinates: [newHotel.latitude * 1, newHotel.longitude * 1],
        },
        cover_pic: newHotel.images[0],
        images: newHotel.images.slice(1),
      };
      console.log(body);
      const { data } = await api.createHotel(body);
      setNewHotel(NEW_HOTEL);
      getAllHotels();
      navigate("/admin/hotels/addRoom", { state: data.data._id });
    } catch (error) {
      handleError(error);
    }
    setRequesting(false);
  };

  const addNewRoom = async (e, hotel) => {
    beforeSubmit(e);
    try {
      setRequesting(true);
      const roomNumbers = newRoom.rooms
        .split(",")
        .map((item) => ({ number: item }));
      const body = {
        ...newRoom,
        roomNumbers,
        hotel,
      };
      await api.createRoom(body);
      setNewRoom(() => NEW_ROOM);
      getAllHotels();
    } catch (error) {
      handleError(error);
    }
    setRequesting(false);
  };

  return (
    <AdminContext.Provider
      value={{
        newRoom,
        activeMenu,
        newHotel,
        handleHotel,
        handleRoom,
        addNewHotel,
        addNewRoom,
        setNewHotel,
        setActiveMenu,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
