import React from "react";
import HotelCard from "../../components/HotelCard/hotelCard";
import "./hotel.css";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { IoFunnelOutline } from "react-icons/io5";
import { useHotel } from "../../store/hotelContext";
import Loading from "./../../components/Loading/loading";

const Hotels = () => {
  const { hotels, handleSearch, isLoading } = useHotel();
  return (
    <Container className="hotelsPage">
      <div className="mainhotels">
        <h4 className="heading">HOTELS</h4>
        <Form>
          <div className="form1">
            <div className="formgrup">
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="search for cities and hotel names"
                  className="searchfield py-3 px-4"
                  onKeyUp={(e) => handleSearch(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="btn1">
              <Button variant="success" className="btn1">
                {" "}
                <IoFunnelOutline /> Filter
              </Button>
            </div>
          </div>
        </Form>

        {isLoading ? (
          <Loading />
        ) : (
          <div className="classifyhotels">
            <Row className="Row1">
              {hotels.map((item) => (
                <Col key={item._id} lg={4} md={6} sm={12}>
                  <HotelCard hotel={item} />
                </Col>
              ))}
            </Row>
          </div>
        )}
      </div>
    </Container>
  );
};
export default Hotels;
