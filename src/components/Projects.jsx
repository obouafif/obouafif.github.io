import React from "react";
// Components
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import Title from "./Title";

// #region component
const Projects = () => {
  return (
    <Element name={"Projects"} id="projects">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Projects"} />
          </Container>
          <p className="text-center mt-4 mb-0" style={{ fontSize: "1.25rem" }}>
            Coming Soon
          </p>
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Projects;
