import React, { useContext, useState } from "react";
import * as api from "../services";
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
  const [bookingStats, setBookingStats] = useState([]);
  //   const [currentUser, setCurrentUser] = useState({});
  //   const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllBookings = useCallback(async () => {
    try {
      //   console.log(config);
      setIsLoading(true);
      const { data } = await api.fetchAllBookings();
      //   console.log(data);
      setBookings(data.data);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  }, []);

  const getBookingStats = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.fetchBookingStats();
      setBookingStats(data.data);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  });

  useEffect(() => {
    getAllBookings();
    getBookingStats();
  }, []);

  return (
    <BookingContext.Provider
      value={{
        bookings,
        bookingStats,
        isLoading,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
