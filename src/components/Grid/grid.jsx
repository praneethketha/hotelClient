import React from "react";

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
        <div className="popular">
          <img src={img1} alt="" className="popularImg" />
          <div className="popularTitle">
            <h4>{city1}</h4>
          </div>
        </div>
        <div className="popular">
          <img src={img3} alt="" className="popularImg" />
          <div className="popularTitle">
            <h4>{city3}</h4>
          </div>
        </div>
      </div>
      <div>
        <div className="popular">
          <img src={img2} alt="" className="popularImg" />
          <div className="popularTitle">
            <h4>{city2}</h4>
          </div>
        </div>

        <div className="popular">
          <img src={img4} alt="" className="popularImg" />
          <div className="popularTitle">
            <h4>{city4}</h4>
          </div>
        </div>
      </div>

      <div className="popular">
        <img src={img5} alt="" className="popularImgspecial" />
        <div className="popularTitle">
          <h4>{city5}</h4>
        </div>
      </div>
    </div>

    // <Container>
    // <Row>
    //   <Col lg={8}>
    //     <Row>
    //       <Col lg={4}>
    //         <div className="popular">
    //           <img src={img1} alt="" className="popularImg" />
    //           <div className="popularTitle">
    //             <h1>Bengalore</h1>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col lg={4}>
    //         <div className="popular">
    //           <img src={img1} alt="" className="popularImg" />
    //           <div className="popularTitle">
    //             <h1>Bengalore</h1>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col lg={4}>
    //         <div className="popular">
    //           <img src={img1} alt="" className="popularImg" />
    //           <div className="popularTitle">
    //             <h1>Bengalore</h1>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col lg={4}>
    //         <div className="popular">
    //           <img src={img1} alt="" className="popularImg" />
    //           <div className="popularTitle">
    //             <h1>Bengalore</h1>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col lg={4}>
    //         <div className="popular">
    //           <img src={img1} alt="" className="popularImg" />
    //           <div className="popularTitle">
    //             <h1>Bengalore</h1>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col lg={4}>
    //         <div className="popular">
    //           <img src={img1} alt="" className="popularImg" />
    //           <div className="popularTitle">
    //             <h1>Bengalore</h1>
    //           </div>
    //         </div>
    //       </Col>
    //     </Row>
    //   </Col>
    //   <Col lg={4}>
    //     <div className="popular">
    //       <img
    //         src={img1}
    //         alt=""
    //         className="popularImg"
    //         // style={{ height: "400px" }}
    //       />
    //       <div className="popularTitle">
    //         <h1>Bengalore</h1>
    //       </div>
    //     </div>
    //   </Col>
    // </Row>
    // </Container>
  );
};

export default Grid;
