import React, { useContext, useState } from "react";
import * as api from "../services";
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
  const {
    config,
    newUser,
    beforeSubmit,
    setRequesting,
    resetNewUser,
    handleError,
  } = useAuth();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllUsers = useCallback(async () => {
    try {
      setRequesting(true);
      const { data } = await api.fetchAllUsers(config);
      setUsers(data.data);
      resetNewUser();
    } catch (error) {
      alert(error);
    }
    setRequesting(false);
  }, []);

  const addNewUser = async (e) => {
    beforeSubmit(e);
    try {
      await api.createUser(newUser);
      getAllUsers();
      resetNewUser();
    } catch (err) {
      handleError(err);
    }
    setRequesting(false);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        isLoading,
        addNewUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
