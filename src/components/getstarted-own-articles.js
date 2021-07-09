import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";

function GetStartedSectionOwnArticles() {
	const styleO = {color: '#ff5200',margin: '-50px 0px 0px 0px'};
	const styleB = {'background-color': '#57007e', 'border-color': '#57007e'};
	
  return (
    <div id="getstarted-section-wrapper2">
      <Container fluid>
        <Jumbotron>
          <h1 style={styleO}><font color="white" size="5">Browse and Shop At </font> <font face="Showcard Gothic"><font color="red">K</font><font color="lightgreen">R</font><font color="yellow">A</font><font color="skyblue">F</font><font color="orange">T</font><font color="#e11d74"><i> Korner</i></font></font>&nbsp;&nbsp;&reg;&nbsp;</h1>
          
          <p>
            <Button variant="primary" size="lg" style={styleB}>Explore Now</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default GetStartedSectionOwnArticles;
