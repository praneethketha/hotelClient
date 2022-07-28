import React from "react";
import { Container } from "react-bootstrap";
import Grid from "../Grid/grid";

import goa from "../../assets/goa.jpg";
import kedarnath from "../../assets/kedarnath.jpg";
import bengalore from "../../assets/bengalore.jpg";
import assam from "../../assets/assam.jpg";
import amritsar from "../../assets/amritsar.jpg";
import srinagar from "../../assets/srinagar.jpg";
import dehradun from "../../assets/dehradun.jpg";
import kerala from "../../assets/kerala.jpg";
import kolkata from "../../assets/kolkata.jpg";
import mumbai from "../../assets/mumbai.jpg";

import "./popular.css";

const Popular = () => {
  return (
    <Container className="my-4">
      <div className="w-85 mx-auto">
        <h2 className="popular-heading">Featured Cities</h2>
        <Grid
          flexDirection="row"
          img1={goa}
          city1="Goa"
          img2={kedarnath}
          city2="Kedarnath"
          img3={bengalore}
          city3="Bengalore"
          img4={assam}
          city4="Assam"
          img5={amritsar}
          city5="Amritsar"
        ></Grid>
        <Grid
          flexDirection="row-reverse"
          img1={kolkata}
          city1="Kolkata"
          img2={dehradun}
          city2="Dehradun"
          img3={kerala}
          city3="Kerala"
          img4={mumbai}
          city4="Mumbai"
          img5={srinagar}
          city5="Srinagar"
        ></Grid>
      </div>
    </Container>
  );
};

export default Popular;
