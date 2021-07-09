import React from "react";
import { Card } from "react-bootstrap";

export default function JobCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Text className="job-time">1 minunte ago</Card.Text>
        <Card.Title>Sr. Reactjs Developer</Card.Title>
        <Card.Subtitle className="mb-4 text-muted">
          Hourly: $20 - $25
        </Card.Subtitle>
        <Card.Text className="job-desc">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.Some quick example text to build on the
          card title and make up the bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
