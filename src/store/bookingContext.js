import React, { useContext, useState } from "react";
import * as api from "./../services";
import cookie from "react-cookies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useAuth } from "./authContext";

const BookingContext = React.createContext();

export const useBooking = () => {
  return useContext(BookingContext);
};

const BookingProvider = ({ children }) => {
  //   const { config } = useAuth();
  const [bookings, setBookings] = useState([]);
  //   const [currentUser, setCurrentUser] = useState({});
  //   const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllBookings = useCallback(async () => {
    try {
      //   console.log(config);
      setIsLoading(true);
      const { data } = await api.fetchAllBookings();
      //   console.log(data);
      setBookings(data);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  }, []);

  //   const createSearchTerm = (value) => {
  //     setSearchTerm(value);
  //   };

  // debouncing in action
  //   let doSomeMagic = function (fn, delay) {
  //     let timer;
  //     return function () {
  //       let context = this;
  //       let args = arguments;
  //       clearTimeout(timer);
  //       timer = setTimeout(() => {
  //         fn.apply(context, args);
  //       }, delay);
  //     };
  //   };

  //   const handleSearch = doSomeMagic(createSearchTerm, 300);

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    <BookingContext.Provider
      value={{
        bookings,

        isLoading,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
