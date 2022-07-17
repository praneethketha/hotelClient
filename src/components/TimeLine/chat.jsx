import React from "react";
import { Row, Col } from "react-bootstrap";

const Chat = ({ className }) => {
  return (
    <Row>
      {className === "timeline1" && <Col className="">chat</Col>}
      {className === "timeline2" && <Col className="">chat</Col>}
    </Row>
  );
};

export default Chat;
