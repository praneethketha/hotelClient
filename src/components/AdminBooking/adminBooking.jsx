import React from "react";
import BookingTable from "../Booking-table/bookingTable";
import "./adminBooking.css";

const AdminBookin = () => {
  return (
    <div className="admin-booking">
      <div className="pt-4">
        <BookingTable />
      </div>
    </div>
  );
};

export default AdminBookin;
