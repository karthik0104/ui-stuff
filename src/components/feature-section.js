import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import FeatureCard from "./feature-card";
import CountUp from 'react-countup';

function FeatureSection() {
  return (
    <div id="feature-section-wrapper">
      <Container>
        <CardGroup>
		<Card className="text-center">
      <Card.Body>
        <Card.Title>
		<CountUp end={1000} duration={5} />
		</Card.Title>
        <Card.Text>
            Plus thoroughly validated tutor profiles
        </Card.Text>
      </Card.Body>
    </Card>
	<Card className="text-center">
      <Card.Body>
        <Card.Title>
		<CountUp end={100}  duration={5}/>
		</Card.Title>
        <Card.Text>
           Subject Categories across which tutors have expertise in
        </Card.Text>
      </Card.Body>
    </Card>
	<Card className="text-center">
      <Card.Body>
        <Card.Title>
		<CountUp end={137}  duration={5}/>
		</Card.Title>
        <Card.Text>
           Countries across which our platform is supported
        </Card.Text>
      </Card.Body>
    </Card>

        </CardGroup>
      </Container>
    </div>
  );
}

export default FeatureSection;
