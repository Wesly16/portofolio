import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiFigma, SiAdobephotoshop, SiVercel, SiMacos } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h2>Visual studio code</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <h2>Figma</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
        <h2>Photoshop</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <h2>Vercel</h2>
      </Col>
    </Row>
  );
}

export default Toolstack;
