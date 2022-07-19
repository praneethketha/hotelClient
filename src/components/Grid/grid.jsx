import React from "react";
import { NavLink } from "react-router-dom";
import { useHotel } from "../../store/hotelContext";

import "./grid.css";

const Grid = ({
  flexDirection,
  img1,
  img2,
  img3,
  img4,
  img5,
  city1,
  city2,
  city3,
  city4,
  city5,
}) => {
  const { setSearchTerm } = useHotel();

  return (
    <div
      className="grid"
      style={{
        display: "flex",
        flexDirection: flexDirection,
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div>
        <NavLink
          to="hotels"
          className="popular"
          onClick={() => setSearchTerm(city1)}
        >
          <img src={img1} alt="" className="popularImg" />
          <div className="popularTitle">
            <h4>{city1}</h4>
          </div>
        </NavLink>
        <NavLink
          to="hotels"
          className="popular"
          onClick={() => setSearchTerm(city3)}
        >
          <img src={img3} alt="" className="popularImg" />
          <div className="popularTitle">
            <h4>{city3}</h4>
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="hotels"
          className="popular"
          onClick={() => setSearchTerm(city2)}
        >
          <img src={img2} alt="" className="popularImg" />
          <div className="popularTitle">
            <h4>{city2}</h4>
          </div>
        </NavLink>

        <NavLink
          to="hotels"
          className="popular"
          onClick={() => setSearchTerm(city4)}
        >
          <img src={img4} alt="" className="popularImg" />
          <div className="popularTitle">
            <h4>{city4}</h4>
          </div>
        </NavLink>
      </div>

      <NavLink
        to="hotels"
        className="popular"
        onClick={() => setSearchTerm(city5)}
      >
        <img src={img5} alt="" className="popularImgspecial" />
        <div className="popularTitle">
          <h4>{city5}</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default Grid;
