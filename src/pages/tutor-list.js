import React, { useState } from "react";
import { Form, Row, Col, Badge, Button, Tab, Nav } from "react-bootstrap";
import Footer from "../components/footer";
import TutorCard from "../components/tutorcard";
import ProposalCard from "../components/proposalcard";
import Checkbox from "../components/checkbox";
import useWindowSize from "../hooks/window-size";
import SignInModal from "./signin-modal";
import SignUpModal from "./signup-modal";
import TutorProfileModal from "./profile-modal";

function TutorListPage() {
    const { width } = useWindowSize();
    const [filterSlider, setFilterSlider] = useState(false);
    function openFilters() {
        setFilterSlider(!filterSlider);
    }
	
	const [signInShow, setSignInShow] = useState(false);
  const [signUpShow, setSignUpShow] = useState(false);
  const [completeProfileShow, setCompleteProfileShow] = useState(false);
  const [tutorProfileShow, setTutorProfileShow] = useState(false);
  
  const handleClose = type => {
    if (type === "signIn") {
      setSignInShow(false);
    } else if (type === "signUp") {
      setSignUpShow(false);
    } else if (type === "completeProfile") {
      setCompleteProfileShow(false);
    } else if (type === "tutorProfile") {
		setTutorProfileShow(false);
		setSignInShow(true);
	}
  };

  
  const handleShow = type => {
    if (type === "signIn") {
      setSignInShow(true);
    } else if (type === "signUp") {
      setSignUpShow(true);
    } else if (type === "completeProfile") {
      setCompleteProfileShow(true);
    } else if (type === "tutorProfile") {
		setTutorProfileShow(true);
	}
  };
	
    return (
        <>
            <div id="joblist">
                <div
                    className={`${
                        filterSlider
                            ? `sidebar${width <= 991 ? " slider" : ""} open`
                            : `sidebar${width <= 991 ? " slider" : ""}`
                        }`}
                >
                    <div className="sidebar-title">
                        <h5>FILTERS</h5>
                        <i
                            className="fa fa-times text-right d-lg-none d-xl-none "
                            onClick={openFilters}
                        ></i>
                    </div>
                    <div className="sidebar-body">
                        <div className="filter-type">
                            <h6 className="filter-type-title">Topic title</h6>
                            <Form.Control type="text" size="sm" />
                        </div>
                        <div className="filter-type">
                            <h6 className="filter-type-title">Topic Discription</h6>
                            <Form.Control as="textarea" type="text" size="sm" />
                        </div>
                        <div className="filter-type">
                            <h6 className="filter-type-title">Tags</h6>
                            <Badge pill variant="success" className="mb-2 mr-2 p-2">Python</Badge>
                            <Badge pill variant="success" className="mb-2 mr-2 p-2">Math</Badge>
                            <Badge pill variant="success" className="mb-2 mr-2 p-2">Java</Badge>
                        </div>

                        <Row>
                            <Col xs={12}>
                                <Button variant="info" size="sm" block className="mb-3">
                                    Find Tutor
                                </Button>
                            </Col>
                            <Col xs={12}>
                                <Button variant="secondary" size="sm" block>
                                    Post Job
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="joblist-wrapper">
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <div className="searchbar-wrapper">
                            <div
                                className="d-lg-none d-md-flex filter-icon"
                                onClick={openFilters}
                            >
                                <i className="fa fa-sliders"></i>
                            </div>
                            <div className="d-flex justify-content-between w-100 mb-3">
                                <Nav variant="pills" className="w-100">
                                    <Nav.Item className="w-40">
                                        <Nav.Link eventKey="first" className="text-center">Best Tutor Matches</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="w-40">
                                        <Nav.Link eventKey="second" className="text-center">Received Proposal</Nav.Link>
                                    </Nav.Item>
									<Nav.Item className="w-40">
                                        <Nav.Link eventKey="third" className="text-center">Contacted Tutors</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </div>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    <Col sm={6} md={4}>
                                        <TutorCard handleShow={handleShow} handleClose={handleClose} />
                                    </Col>
                                    <Col sm={6} md={4}>
                                        <TutorCard handleShow={handleShow} handleClose={handleClose} />
                                    </Col>
                                    <Col sm={6} md={4}>
                                        <TutorCard handleShow={handleShow} handleClose={handleClose}/>
                                    </Col>
                                    <Col sm={6} md={4}>
                                        <TutorCard />
                                    </Col>
                                    <Col sm={6} md={4}>
                                        <TutorCard />
                                    </Col>
                                    <Col sm={6} md={4}>
                                        <TutorCard />
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <ProposalCard />
                                <ProposalCard />
                                <ProposalCard />
                                <ProposalCard />
                                <ProposalCard />
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
            </div>
			<SignInModal
        signInShow={signInShow}
		handleClose={handleClose}
        handleShow={handleShow}
      />
      <SignUpModal
        signUpShow={signUpShow}
		handleClose={handleClose}
        handleShow={handleShow}
      />
	  <TutorProfileModal
        tutorProfileShow={tutorProfileShow}
		handleClose={handleClose}
        handleShow={handleShow}
      />
            <Footer />
        </>
    );
}
export default TutorListPage;
