import React from "react";
import { Col, Row } from "react-bootstrap";

import { DiJavascript, DiReact, DiCss3 } from "react-icons/di";
import { SiHtml5, SiBootstrap, SiLaravel } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
        <h2>HTML</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h2>CSS</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript />
        <h2>Javascript</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel />
        <h2>Laravel</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h2>React.js</h2>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <h2>Bootstrap</h2>
      </Col>
    </Row>
  );
}

export default Techstack;
