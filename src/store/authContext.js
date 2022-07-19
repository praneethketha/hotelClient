import React, { useContext, useState } from "react";
import * as api from "./../services";
import cookie from "react-cookies";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    passwordCurrent: "",
    password: "",
    passwordConfirm: "",
    contact_number: "",
    otp: "",
  });
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [config, setConfig] = useState({});
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [changeText, setChangeText] = useState(0);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      setChangeText(1);
      const { data } = await api.signup(newUser);

      setCurrentUser({ userId: data.data.userId });
      setChangeText(2);
    } catch (err) {
      setChangeText(0);
      setErrors(JSON.parse(err.response.data.message));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setChangeText(1);
      const { data } = await api.login(credentials);

      setChangeText(0);
      saveCurrentUser(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.verifyOTP({
        user_id: currentUser.userId,
        otp: newUser.otp,
      });

      saveCurrentUser(data);
    } catch (error) {
      setErrors({ otp: error.response.data.message });
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    resetErrors();
    try {
      const { data } = await api.changePassword(config, newUser);
      saveCurrentUser(data);
    } catch (error) {
      const errMsg = error.response.data.message;
      if (errMsg[0] === "{") {
        setErrors(JSON.parse(error.response.data.message));
      } else {
        setError(error.response.data.message);
      }
    }
  };

  const loginChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const signupChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const getUser = async () => {
    try {
      const { data } = await api.fetchUser(cookie.load("userId"));

      setCurrentUser(data.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.updateMe(config, newUser);

      setCurrentUser(data.data);
      navigate(-1);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const saveCurrentUser = (data) => {
    cookie.save("token", data.token, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    cookie.save("userId", data.data._id, {
      expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });

    setCurrentUser(data.data);
    navigate(-1);
  };

  const handleLogOut = () => {
    cookie.remove("userId");
    cookie.remove("token");
    setCurrentUser(() => {});
  };

  const resetErrors = () => {
    setError("");
    setErrors({});
  };

  useEffect(() => {
    setConfig({
      headers: {
        authorization: `Bearer ${
          cookie.load("token") ? cookie.load("token") : ""
        }`,
      },
    });

    if (cookie.load("userId")) {
      getUser();
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider
      value={{
        config,
        newUser,
        currentUser,
        errors,
        error,
        credentials,
        changeText,
        loginChange,
        signupChange,
        handleLogin,
        handleSignUp,
        handleVerify,
        handleEdit,
        handleLogOut,
        handleChangePassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
