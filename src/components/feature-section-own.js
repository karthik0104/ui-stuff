import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import FeatureCard from "./feature-card";
import CountUp from 'react-countup';

function FeatureSectionOwn() {
  return (
    <div id="feature-section-wrapper">
      <Container>
        <CardGroup>
		<Card className="text-center">
      <Card.Body>
        <Card.Title>
		<CountUp end={10} duration={5} />+
		</Card.Title>
        <Card.Text>
            <h6>Articles For Sale</h6>
        </Card.Text>
      </Card.Body>
    </Card>
	<Card className="text-center">
      <Card.Body>
        <Card.Title>
		One-stop Shop
		</Card.Title>
        <Card.Text>
           <h6>For Handmade Articles</h6>
        </Card.Text>
      </Card.Body>
    </Card>
	<Card className="text-center">
      <Card.Body>
        <Card.Title>
		Customized
		</Card.Title>
        <Card.Text>
           <h6>Articles As Per Requirement</h6>
        </Card.Text>
      </Card.Body>
    </Card>

        </CardGroup>
      </Container>
    </div>
  );
}

export default FeatureSectionOwn;
