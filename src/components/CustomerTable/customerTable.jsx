import React, { useMemo, useState } from "react";
import "./customerTable.css";
import Table from "react-bootstrap/Table";
import data from "../../data/db.json";
import { Button, Container, Form } from "react-bootstrap";
import Pagination from "../Pagination/pagination";

let PageSize = 8;

const CustomerTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const handleDelete = () => {};
  return (
    <div className="customer-table-container mt-5">
      <Container className="pt-4">
        <div>
          <p>Page</p>
        </div>
        <div>
          <h4>Customers</h4>

          <Button
            variant="danger"
            className="delete-button mt-2"
            onClick={handleDelete}
          >
            <i class="pe-1 fa-solid fa-trash-can"></i>Delete
          </Button>
        </div>
        <Table className="customer-table">
          <thead>
            <tr className="text-center">
              <td>
                <Form.Check aria-label="option 1" />
              </td>

              <td>Name</td>
              <td>Email</td>
              <td>Booking</td>
              <td>Role</td>
              <td>Status</td>
              <td>Contact-number</td>
            </tr>
          </thead>
          <tbody>
            {currentTableData.map((item) => {
              return (
                <tr className="text-center text-capitalize ps-0">
                  <td>
                    <Form.Check aria-label="option 1" value={item} />
                  </td>

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

export default CustomerTable;
