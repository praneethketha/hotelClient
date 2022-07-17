import React from "react";
import "./hero.css";
import background_img from "../../assets/bg.jpeg";
import { Container } from "react-bootstrap";

const Hero = () => {
  return (
    <div className="hero-unit">
      <div>
        {/* <Container fluid> */}
        <img src={background_img} alt="" className="hero-img" />
        <div className="hero-titles">
          <h1>Spend Quality Holidays With Us.</h1>
          <p className="mt-4">The best hotel details from all the hotels.</p>
          <button className="btn mt-4">Book Now</button>
        </div>
        {/* </Container> */}
      </div>
    </div>
  );
};

export default Hero;
