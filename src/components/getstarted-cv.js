import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

function GetStartedSection() {
	const styleO = {color: '#ff5200',margin: '0px 0px 40px 0px'};
	const styleB = {'background-color': '#57007e', 'border-color': '#57007e'};
	
  return (
    <div id="getstarted-section-wrapper">
      <Container fluid>
        <Jumbotron>
          <h1 style={styleO}>About SWS</h1>
          <p>
            SWS is an Analytics-based visualization platform, which aims to portray the level of employee safety within your organization. The platform serves to provide you with an enhanced view about how safe your workplace is, in terms of various metrics and KPIs.
          </p>
          <p>
            <Button variant="primary" size="lg" style={styleB}>Get Started</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default GetStartedSection;
