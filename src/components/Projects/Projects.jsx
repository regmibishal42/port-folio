import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import travelFreely from "../../Assets/Projects/travel.png";
import doge from "../../Assets/Projects/doge.png";
import kurakani from "../../Assets/Projects/kurakani.jpeg";
import conceptTwo from "../../Assets/Projects/concept-two.jpeg";
import logicloud from "../../Assets/Projects/logicloud.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logicloud}
              isBlog={false}
              title="LogiCloud"
              description="A complete business management system for small to mid sized businesses in nepal.With go with graphql as backend and react on the frontend."
              ghLink="https://github.com/regmibishal42/logicloud_frontend"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kurakani}
              isBlog={false}
              title="Kuraa-Kani"
              description="Realtime chat system build using NodeJs with express on the backend(MongoDb as database) and React in the frontend. Along with socket.io for realtime chat and notification.It supports unlimited group chat and files sharing as well."
              ghLink="https://github.com/regmibishal42/KuraKani"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={conceptTwo}
              isBlog={false}
              title="Concept-Two"
              description="Build as a part of 5th semester project.Concept two is a full e-commerce site build using MERN Stack. It supports payment gateway like Khalti and esewa.And email notification system using nodemailer.The images and files were hosted on cloudinary."
              ghLink="https://github.com/regmibishal42/conceptTwo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={doge}
              isBlog={false}
              title="Doge-News"
              description="A crypto-currencies news website that provides latest pricing,trends and market cap of various cryptocurrencies and upcoming cryptocurrencies and ranks them and shows the details in attractive dash-board.It uses free APIs from RAPID API to displays such data.It is build using react,react-redux-toolkit and materialUI."
              ghLink="https://github.com/regmibishal42/DogeNews"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travelFreely}
              isBlog={false}
              title="Travel-Freely"
              description="It is a travel guide website that suggest nearby attraction,hotels and restaurants and displays them in google maps along with their reviews and ratings.I build this project to learn and implement google maps sdk in react. It uses RAPID API for data."
              ghLink="https://github.com/regmibishal42/TravelFreely/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
