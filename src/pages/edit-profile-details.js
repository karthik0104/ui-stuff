import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Modal
} from "react-bootstrap";
import Rating from "../components/rating";
import ListGroupItems from "../components/list-group-items";

function ProfileDetails() {

  const [showModal, setShowModal] = useState(false);

  const onClickEditPopup = () => {
    setShowModal(!showModal)
  }
  const onHidePopup = () => {
    setShowModal(false)
  }

  console.log(showModal)
  return (
    <div id="profile-details">
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Card className="userdetails edit-profile">
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtMJw-4W58Rp-7KSFsrq1Q6Ch4tRCUcLCX-SewBJUi7HFMXw73qw&s"
              >
              </Card.Img>
              <div className="edit-profile-img">
                  <input
                    style={{ display: "none" }}
                    id="edit-pic"
                    type="file"
                    name="edit-pic"
                    accept="image/jpeg, image/jpg, image/png"
                  />
                  <label
                    style={{ display: "unset", cursor: "pointer" }}
                    htmlFor="edit-pic"
                  >
                    <i className="fa fa-2x fa-pencil" />
                  </label>
              </div>
              <Card.Body>
                <i className="fa fa-pencil d-flex justify-content-end" onClick={onClickEditPopup}/>
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
              <Card.Header as="h6" className="d-flex justify-content-between">
                <span>Skills</span>
                <i className="fa fa-pencil" onClick={onClickEditPopup} />
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header as="h6" className="d-flex justify-content-between">
                <span>TuLance Track Record</span>
                <i className="fa fa-pencil" onClick={onClickEditPopup}/>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header as="h6" className="d-flex justify-content-between">
                <span>Professional Experience</span>
                <i className="fa fa-pencil" onClick={onClickEditPopup}/>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header as="h6" className="d-flex justify-content-between">
                <span>Review &amp; Feedback</span>
                <i className="fa fa-pencil" onClick={onClickEditPopup}/>
              </Card.Header>
              <Card.Body>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal
          dialogClassName="editProfile"
          show={showModal}
          onHide={onHidePopup}
        >
          <Modal.Header closeButton>
            <Modal.Title>Skills</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
}
export default ProfileDetails;
