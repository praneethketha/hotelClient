import axios from "axios";

const URL = "http://localhost:8000/api/v1";

export const fetchAllHotels = (searchTerm) =>
  axios.get(`${URL}/hotels?key=${searchTerm}`);
export const signup = (data) => axios.post(`${URL}/users/signup`, data);
export const login = (data) => axios.post(`${URL}/users/login`, data);
export const verifyOTP = (data) => axios.patch(`${URL}/users/verifyOTP`, data);
export const fetchUser = (id) => axios.get(`${URL}/users/${id}`);
export const updateMe = (config, data) =>
  axios.patch(`${URL}/users/updateMe`, data, config);
export const changePassword = (config, data) =>
  axios.patch(`${URL}/users/updateMyPassword`, data, config);
