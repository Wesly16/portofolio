import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import pdf from "../../Assets/../Assets/Cv-Wesly Daud Siahaan.pdf";
import { AiOutlineDownload } from "react-icons/ai";

import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function AboutCard() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br /> I am highly motivated to learn new experiences, enjoy activities that involve a lot of people or teamwork And have an interest in web programming and data.
            <br />
            Currently, I am still pursuing my undergraduate education at Universitas Dinamika Bangsa by majoring in information systems. I am currently in the 6th semester and am in the lecture period.
          </p>
        </blockquote>
      </Card.Body>
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Card>
  );
}

export default AboutCard;
