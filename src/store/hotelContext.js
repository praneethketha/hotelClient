import React, { useContext, useState } from "react";
import * as api from "./../services";
import cookie from "react-cookies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const HotelContext = React.createContext();

export const useHotel = () => {
  return useContext(HotelContext);
};

const HotelProvider = ({ children }) => {
  const [hotels, setHotels] = useState([]);
  const [currentHotel, setCurrentHotel] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllHotels = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await api.fetchAllHotels(searchTerm);
      setHotels(data.data);
    } catch (error) {
      alert(error);
    }
    setIsLoading(false);
  }, [searchTerm]);

  const createSearchTerm = (value) => {
    setSearchTerm(value);
  };

  // debouncing in action
  let doSomeMagic = function (fn, delay) {
    let timer;
    return function () {
      let context = this;
      let args = arguments;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, delay);
    };
  };

  const handleSearch = doSomeMagic(createSearchTerm, 300);

  useEffect(() => {
    getAllHotels();
  }, [getAllHotels]);

  return (
    <HotelContext.Provider
      value={{
        hotels,
        currentHotel,
        isLoading,
        createSearchTerm,
        setSearchTerm,
        handleSearch,
      }}
    >
      {children}
    </HotelContext.Provider>
  );
};

export default HotelProvider;
