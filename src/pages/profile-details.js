import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import Rating from "../components/rating";
import ListGroupItems from "../components/list-group-items";

function ProfileDetails() {
  return (
    <div id="profile-details">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Card className="userdetails">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMJw-4W58Rp-7KSFsrq1Q6Ch4tRCUcLCX-SewBJUi7HFMXw73qw&s"
              />
              <Card.Body>
                <Card.Title>Arvind K.</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Data Science &amp; Analytics Professional
                </Card.Subtitle>
                <div className="text-center">
                  <Rating rate={4} />
                </div>
              </Card.Body>
              <Card.Footer>
                <ListGroup variant="flush">
                  <ListGroupItems title="Location" value="Bangalore, India" />
                  <ListGroupItems
                    title="Hourly Rate (USD)"
                    value="$20.00 - $25.00"
                  />
                  <ListGroupItems title="Jobs Taken" value="47" />
                  <ListGroupItems title="Total Money Earned" value="$5000" />
                  <ListGroupItems title="Since" value="November 27" />
                </ListGroup>
              </Card.Footer>
            </Card>
          </Col>
          <Col sm={12} md={8}>
            <Card className="mb-4">
              <Card.Header as="h6">Skills</Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header as="h6">TuLance Track Record</Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header as="h6">Professional Experience</Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header as="h6">Review &amp; Feedback</Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default ProfileDetails;
