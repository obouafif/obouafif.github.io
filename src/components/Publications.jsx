import React from "react";
// Components
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import Title from "./Title";
// Config
import { publications } from "../config";

// #region component
const Publications = () => {
  return (
    <Element name={"Publications"} id="publications">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Publications"} />
          </Container>
          <ul id="publications-list" className="mt-4 list-unstyled px-2 px-md-0" style={{ fontSize: "1rem" }}>
            {publications.map((pub) => (
              <li key={pub.id} className="mb-3">
                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-decoration-underline">
                  {pub.authors}, <em>{pub.title}</em>, {pub.venue}, {pub.year}.
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Publications;
