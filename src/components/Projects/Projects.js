import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import calculator from "../../Assets/Projects/calculator.png";
import ecowaste from "../../Assets/Projects/ecowaste.png";
import todolist from "../../Assets/Projects/todolist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecowaste}
              isBlog={false}
              title="Ecowaste"
              description=" This website is a form of final project from the independent study activities of the independent campus which was created using the React.js library and presents 3 main features, namely sorting waste, articles and news."
              ghLink="https://github.com/Wesly16"
              demoLink="https://final-project-ecowaste.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="Todo List"
              description="A simple website to be able to help activities that must be done in a time span and planning so that the schedule does not interfere with other activities."
              ghLink="https://github.com/Wesly16/TPA-05-Todolist.app"
              demoLink="https://wesly-todolist-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator BMI"
              description="A website that can help with easy calculations and can provide basic information on overall weight issues."
              ghLink="https://github.com/Wesly16/TPA2-Calculator-BMI"
              demoLink="https://wesly-calculator-bmi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
