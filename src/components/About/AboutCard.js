import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br /> I am highly motivated to learn new experiences, enjoy activities that involve a lot of people or teamwork And have an interest in web programming.
            <br />
            Currently, I am still pursuing my undergraduate education at Universitas Dinamika Bangsa by majoring in information systems. I am currently in the 6th semester and am in the lecture period.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
