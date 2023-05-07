import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiGit,
} from "react-icons/di";
import {
SiNestjs,
  SiNextdotjs,
  SiTypescript,
  SiGraphql
} from "react-icons/si";
import {TbBrandGolang} from "react-icons/tb"
function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
      </Col>
    </Row>
  );
}

export default Techstack;
