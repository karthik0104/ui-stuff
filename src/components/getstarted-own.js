import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import  { Redirect, useHistory } from 'react-router-dom'

function GetStartedSectionOwn() {
	const styleO = {color: '#ff5200',margin: '0px 0px 40px 0px'};
	const styleB = {'background-color': '#57007e', 'border-color': '#57007e'};
	
	const history = useHistory();
	
	const more = () => {
		history.push('/articles');
	}
	
  return (
    <div id="getstarted-section-wrapper">
      <Container fluid>
        <Jumbotron>
          <h1 style={styleO}><font color="white">About</font> <font face="Showcard Gothic"><font color="red">K</font><font color="lightgreen">R</font><font color="yellow">A</font><font color="skyblue">F</font><font color="orange">T</font><font color="#e11d74"><i> Korner</i></font></font>&nbsp;&nbsp;&reg;&nbsp;</h1>
          <p>
            <font color="white">An initiative to create and deliver attractive handmade articles to you at the best price. Come, explore and make your choice ! Get your product delivered right at your doorstep !</font>
          </p>
          <p>
            <Button variant="primary" size="lg" style={styleB} onClick={() => more()}>Explore Now</Button>
          </p>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default GetStartedSectionOwn;
