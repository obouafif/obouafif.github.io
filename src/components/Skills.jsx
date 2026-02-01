import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { skillCategories, resume } from "../config";

// #region component
const Skills = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Technical Skills"} />
          </Container>
          {skillCategories.map((cat) => (
            <div key={cat.category} className="mt-4">
              <h5 className="mb-3">{cat.category}</h5>
              <Row className="align-items-center">
                {cat.skills.map((s) => (
                  <Col xs={4} md={2} key={`${cat.category}-${s.id}`} className="my-md-5">
                    <figure className="mb-0">
                      {s.skill}
                      <figcaption>{s.name}</figcaption>
                    </figure>
                  </Col>
                ))}
              </Row>
            </div>
          ))}
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Skills;
