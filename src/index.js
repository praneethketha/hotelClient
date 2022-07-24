import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider from "./store/authContext";
import { BrowserRouter } from "react-router-dom";
import HotelProvider from "./store/hotelContext";
import { AdminContextProvider } from "./store/adminContext";
import UserProvider from "./store/userContext";
import BookingProvider from "./store/bookingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <HotelProvider>
        <AuthProvider>
          <AdminContextProvider>
            <UserProvider>
              <BookingProvider>
                <App />
              </BookingProvider>
            </UserProvider>
          </AdminContextProvider>
        </AuthProvider>
      </HotelProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
