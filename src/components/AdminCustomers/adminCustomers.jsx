import React from "react";
import CustomerTable from "../CustomerTable/customerTable";
import "./adminCustomers.css";

const AdminCustomers = () => {
  return (
    <div className="admin-customer ">
      <div className="pt-4">
        <CustomerTable />
      </div>
    </div>
  );
};

export default AdminCustomers;
