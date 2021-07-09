import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

function GetStartedSection() {
  return (
    <div id="getstarted-section-wrapper">
      <Container fluid>
        <Jumbotron>
          <h1>About TuLance</h1>
          <p>
            TuLance is a global platform to connect tutors and students. Whether you are a student looking for help, or a teacher who is looking to mentor people in your field of expertise, this is the place for you !
          </p>
          <p>
            <Button variant="primary" size="lg">Get Started</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default GetStartedSection;
