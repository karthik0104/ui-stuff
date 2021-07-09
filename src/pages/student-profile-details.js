import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
} from "react-bootstrap";
import Rating from "../components/rating";
import ListGroupItems from "../components/list-group-items";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class StudentProfileDetails extends Component {
	
  hC() {
		console.log('Ohhhk!!!');
	};
	
	makeCR(params) {
		return '<a href="ok.html">View Details</a>';  
  };
	
	constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "Assignment", field: "asgn", sortable:true, filter:true
      }, {
        headerName: "Tutor", field: "tutor", sortable:true, filter:true
      },{
        headerName: "Date Of Posting", field: "date", sortable:true
      },
	  {
        headerName: "", field: "price", cellRenderer: this.makeCR
      }],
      rowData: [{
        asgn: "Toyota", tutor: "Celica", date: 35000
      }, {
        asgn: "Ford", tutor: "Mondeo", date: 32000
      }, {
        asgn: "Porsche", tutor: "Boxter", date: 72000
      }]
    }
	
	this.hC = this.hC.bind(this);
  }
  
  render() {
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
					  <ListGroupItems title="Contact Number" value="+91-8888-999" />
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
				  <Card.Header as="h6">Your TuLance Assignments</Card.Header>
				  <Card.Body>
					<Card.Text>
					  With supporting text below as a natural lead-in to additional
					  content.
					</Card.Text>
					 <div
        className="ag-theme-alpine"
        style={{
        height: '250px',
        width: '700px' }}
      >
        <AgGridReact
          columnDefs={this.state.columnDefs}
          rowData={this.state.rowData}>
        </AgGridReact>
      </div>
				  </Card.Body>
				</Card>
			  </Col>
			</Row>
		  </Container>
		</div>
	  );
  }
}
export default StudentProfileDetails;
