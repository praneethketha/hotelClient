// import React, { createContext, useContext, useState } from "react";

// const UserContext = createContext();

// const UserProvider = ({ children }) => {
//   const [users, setUsers] = useState([]);
//   const [currentUser, setCurrentUser] = useState({});
//   // const [searchTerm, setSearchTerm] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const getAllUsers = useCallback(async () => {
//     try {
//       setIsLoading(true);
//       const { data } = await api.getAllUsers();
//       console.log(data);
//       setUser(data.data);
//     } catch (error) {
//       alert(error);
//     }
//     setIsLoading(false);
//   }, []);
// };

// useEffect(() => {
//   getAllUsers();
// }, [getAllUsers]);

// export const UserContext = () => useContext(UserContext);
import React, { useContext, useState } from "react";
import * as api from "./../services";
import cookie from "react-cookies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { useAuth } from "./authContext";

const UserContext = React.createContext();

export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const { config } = useAuth();
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  //   const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllUsers = useCallback(async () => {
    try {
      console.log(config);
      setIsLoading(true);
      const { data } = await api.fetchAllUsers(config);
      console.log(data);
      setUsers(data);
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
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
