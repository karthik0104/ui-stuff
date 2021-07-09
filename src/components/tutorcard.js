import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./rating";

export default function TutorCard(props) {
	var ok = 'Contact Tutor';
  return (
    <Card className="tutor-card p-0">
      <Card.Body>
        <div className="d-flex">
          <div>
            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg" />
          </div>
          <div>
            <Card.Title>Arvind K.</Card.Title>
            <Card.Subtitle className="mb-0 text-muted">
              Data Science &amp; Analytics Professional
            </Card.Subtitle>
          </div>
        </div>
        <hr />
        <div className="tutor-performance">
          <div className="d-flex justify-content-between">
            <Card.Text >Skills Match</Card.Text>
            <span>
              <Rating rate={4} />
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <Card.Text >Project Completed</Card.Text>
            <span>
              20
          </span>
          </div>
          <div className="d-flex justify-content-between">
            <Card.Text >Average Rating</Card.Text>
            <span>
              <Rating rate={2} />
            </span>
          </div>
          <div className="d-flex justify-content-between">
            <Card.Text >Total Earning</Card.Text>
            <span>
              $500
          </span>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <Button variant="primary" size="sm" onClick={() => props.handleShow('tutorProfile')}>View Profile</Button>
          <Button variant="secondary" size="sm" onClick={() => props.handleShow('signUp')}>{ok}</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
