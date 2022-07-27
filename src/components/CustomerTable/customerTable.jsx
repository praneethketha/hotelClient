import React, { useMemo, useState } from "react";
import "./customerTable.css";
import Table from "react-bootstrap/Table";
// import data from "../../data/db.json";
import { Button, Container, Form } from "react-bootstrap";
import Pagination from "../Pagination/pagination";
import { useUser } from "../../store/userContext";
import AddCustomer from "../AddCustomer/addCustomer";
import { MdEdit } from "react-icons/md";

let PageSize = 8;

const CustomerTable = () => {
  const { users } = useUser();
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, users]);

  const handleDelete = () => {};
  return (
    <div className="booking-table-container mt-2">
      <Container className="pt-4 h-100 container-table">
        <div>
          <p className="m-0">Page</p>
        </div>
        <div>
          <h4 className="m-0 p-0">Customers</h4>

          <div className="d-flex gap-2">
            <Button
              variant="danger"
              className="delete-button mt-2"
              onClick={handleDelete}
            >
              <i class="pe-1 fa-solid fa-trash-can"></i>Deactivate
            </Button>
            {/* <Button
              variant="primary"
              className="delete-button mt-2"
              onClick={handleDelete}
            >
              <MdEdit /> Edit
            </Button> */}
          </div>
        </div>
        <div className="table-container m-0 p-0">
          <Table className="booking-table">
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

                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.bookings.length}</td>
                    <td>{item.role}</td>
                    <td>{item.active ? "Active" : "In Active"}</td>
                    <td>{item.contact_number}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        <Pagination
          className="pagination-bar"
          currentPage={currentPage}
          totalCount={users.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
        <button className="editIcon addIcon" onClick={() => setOpen(true)}>
          +
        </button>
      </Container>
      <div></div>
      {open && <AddCustomer setOpen={setOpen} />}
    </div>
  );
};

export default CustomerTable;
