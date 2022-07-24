import React from "react";
import HotelTable from "../Hotel-table/hotelTable";
import "./adminHotel.css";

const AdminHotel = () => {
  return (
    <div className="admin-hotel">
      <div className="pt-4">
        <HotelTable />
      </div>
    </div>
  );
};

export default AdminHotel;
