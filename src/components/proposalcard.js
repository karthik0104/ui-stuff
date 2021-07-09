import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./rating";

export default function ProposalCard() {
  return (
    <Card className="tutor-card p-0">
      <Card.Body>
        <div className="d-flex">
          <div>
            <Card.Img variant="top" src="https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg" />
          </div>
          <div className="w-100">
            <Card.Title className="d-flex justify-content-between">
              <span>Arvind K.</span>
              <span className="font-weight-light font-12">Posted 12min. ago</span>
            </Card.Title>
            <Card.Subtitle className="mb-3 text-muted">
              Bid Amout: $120
            </Card.Subtitle>
            <div className="tutor-performance">
              <span style={{color:'#666'}}>
                Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
            </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Button variant="primary" size="sm">Contact</Button>
          {/* <Button variant="secondary" size="sm">Contact Tutor</Button> */}
        </div>
      </Card.Body>
    </Card>
  );
}
