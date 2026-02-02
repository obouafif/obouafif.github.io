import React from "react";
// Components
import { Element } from "react-scroll";
import { Button, Container } from "react-bootstrap";
import Title from "./Title";
// Config
import { cvPdf } from "../config";

// #region component
const Resume = () => {
  const cvUrl = cvPdf
    ? cvPdf.startsWith("http")
      ? cvPdf
      : `${process.env.PUBLIC_URL}${cvPdf.startsWith("/") ? cvPdf : `/${cvPdf}`}`
    : null;

  return (
    <Element name={"Resume"} id="resume">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Resume"} />
          </Container>
          <p className="mt-4 mb-3" style={{ fontSize: "1.1rem" }}>
            Download the full CV in PDF format.
          </p>
          {cvUrl && (
            <Button
              as="a"
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-primary"
            >
              Download CV
            </Button>
          )}
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Resume;
