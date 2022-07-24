import React, { useMemo, useState } from "react";
import "./bookingTable.css";
import Table from "react-bootstrap/Table";
import data from "../../data/db.json";
import { Container } from "react-bootstrap";
import Pagination from "../Pagination/pagination";
import { useBooking } from "../../store/bookingContext";

let PageSize = 8;

const BookingTable = () => {
  const { bookings } = useBooking();
  const bookingArr = bookings.data;
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="booking-table-container mt-2">
      <Container className="pt-4">
        <div>
          <p>Page</p>
        </div>
        <div className="d-flex justify-content-between">
          <h4>Bookings</h4>
        </div>
        <Table className="booking-table">
          <thead>
            <tr className="text-center">
              <td>Room Number</td>

              <td>Hotel Name</td>
              <td>Customer</td>
              <td>From Date</td>
              <td>To Date</td>
              <td>Total Amount</td>
              <td>Location</td>
            </tr>
          </thead>
          <tbody>
            {bookingArr.map((item) => {
              return (
                <tr className="text-center text-capitalize ps-0">
                  <td>{item.id}</td>
                  {/* <td>{item.hotel_name}</td> */}
                  <td>{item.hotel.name}</td>
                  <td>{item.user.name}</td>
                  <td>{item.from.slice(0, 10)}</td>
                  <td>{item.to.slice(0, 10)}</td>
                  <td>{item.amount}</td>

                  <td>{item.hotel.description}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {/* <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        /> */}
      </Container>
      <div></div>
    </div>
  );
};

export default BookingTable;
