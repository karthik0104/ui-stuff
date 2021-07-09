import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import Footer from "../components/footer";
import JobCard from "../components/jobcard";
import Checkbox from "../components/checkbox";
import useWindowSize from "../hooks/window-size";

function JobsListPage() {
  const { width } = useWindowSize();
  const [filterSlider, setFilterSlider] = useState(false);
  function openFilters() {
    setFilterSlider(!filterSlider);
  }
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
            <div className="filter-type job-type">
              <h6 className="filter-type-title">Job Type</h6>
              <Checkbox label="Fixed Jobs" id="fixed-type" />
              <Checkbox label="Hourly Jobs" id="hourly-type" />
            </div>
            <div className="filter-type">
              <h6 className="filter-type-title">Location</h6>
              <Form.Control type="text" size="sm" />
            </div>
            <div className="filter-type">
              <h6 className="filter-type-title">Pay Scale</h6>
              <Row>
                <Col>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        $
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Min" />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup size="sm">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroupPrepend">
                        $
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="Max" />
                  </InputGroup>
                </Col>
              </Row>
            </div>
            <div className="filter-type job-type">
              <h6 className="filter-type-title">Experience</h6>
              <Checkbox label="less than 1 year" id="year-0" />
              <Checkbox label="1 to 3 years" id="year-1" />
              <Checkbox label="3 to 5 years" id="year-3" />
              <Checkbox label="5 to 10 years" id="year-5" />
              <Checkbox label="10+ years" id="year-10" />
              <Checkbox label="15+ years" id="year-15" />
            </div>
            <Row>
              <Col>
                <Button variant="info" size="sm" block>
                  Apply
                </Button>
              </Col>
              <Col>
                <Button variant="light" size="sm" block>
                  Reset
                </Button>
              </Col>
            </Row>
          </div>
        </div>
        <div className="joblist-wrapper">
          <div className="searchbar-wrapper">
            <div
              className="d-lg-none d-md-flex filter-icon"
              onClick={openFilters}
            >
              <i className="fa fa-sliders"></i>
            </div>
            <div className="d-flex justify-content-between w-100">
              <Form.Control
                type="email"
                placeholder="Searc Jobs"
                className="search"
              />
              <Form.Group as={Row} controlId="formPlaintextEmail">
                <Form.Label column sm="4" className="d-none d-sm-block">
                  SortBy
                </Form.Label>
                <Col sm="8" xs="12">
                  <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Col>
              </Form.Group>
            </div>
          </div>
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
export default JobsListPage;
