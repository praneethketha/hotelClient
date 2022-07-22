import React, { useMemo, useState } from "react";
// import "./adminBooking.css";
import "./hotelTable.css";
import Table from "react-bootstrap/Table";
import data from "../../data/db.json";
import { Container } from "react-bootstrap";
import Pagination from "../Pagination/pagination";

let PageSize = 8;

const HotelTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <div className="hotel-table-container mt-5">
      <Container className="pt-4">
        <div>
          <p>Page</p>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <h4>Hotels</h4>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search by name, city"
            className="ps-4  border-1"
          />
        </div>
        <Table className="hotel-table">
          <thead>
            <tr className="text-center">
              <td className="ps-0">Hotel Name</td>
              <td>Base Price</td>
              <td>Rating</td>
              <td>Reviews</td>
              <td>Rooms</td>
              <td>Location</td>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item) => {
              return (
                <tr className="text-center ps-0 text-capitalize">
                  <td>{item.hotel_name}</td>
                  <td>{item.base_price}</td>
                  <td>{item.rating}</td>
                  <td>{item.reviews}</td>
                  <td>{item.rooms}</td>
                  <td>{item.location}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Container>
      <div></div>
    </div>
  );
};

export default HotelTable;
