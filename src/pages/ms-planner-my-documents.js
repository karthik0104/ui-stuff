import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns, Button, Form, Col, Accordion } from "react-bootstrap";
import { render } from 'react-dom';
import MenuTest from "./menu-test";
import NavbarMSH from "../components/navbar-ms-header";
import { Tabbordion, TabPanel, TabLabel, TabContent } from 'react-tabbordion'

import { AgGridColumn, AgGridReact } from 'ag-grid-react';


function MSPlannerMD() {
	const blockElements = {
    content: 'tabs-content',
    panel: 'tabs-panel',
    label: 'tabs-title'
}
	
      const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
	

    const [rowData, setRowData] = useState([
        { college: "University Of Pennsylvania", name:"SOP_Penn_State_1", createdon: "24th March", modifiedon: "27th March", collegedeadline: "15th April", document: "View" },
        { college: "University Of Pennsylvania", name:"SOP_Penn_State_1", createdon: "24th March", modifiedon: "27th March", collegedeadline: "15th April", document: "View" },
        { college: "University Of Pennsylvania", name:"SOP_Penn_State_1", createdon: "24th March", modifiedon: "27th March", collegedeadline: "15th April", document: "View" }
    ]);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }
	
	
  return (
  <div>
  <MenuTest></MenuTest>
  
  <div style={{'margin-left':'90px', 'margin-top':'20px'}}>
  <font size="5" color="#333456"><b>My Documents</b></font>
  </div>
  
  <div style={{'border-width':'1px', 'border-radius':'10px', 'border-color':'rgba(51, 170, 51, .1)', 'border-style':'solid', 'margin-left':'90px', 'margin-right':'5px', 'margin-top':'15px', 
  'background-color':'rgba(255,155,255,0.1)', "boxShadow": "7px 7px 7px #9E9E9E", 'width':'90%', 'padding-bottom':'10px'}}>
  <div style={{'margin-left':'20px', 'margin-top':'10px'}}>
  <center><font size="2"><b>Save your important documents here, and manage them for applying to various colleges.</b></font></center>
  </div>
  </div>
  
  <div style={{'border-width':'1px', 'border-radius':'25px', 'border-color':'rgba(51, 170, 51, .1)', 'border-style':'solid', 'margin-left':'90px', 'margin-right':'5px', 'margin-top':'25px', 
  'background-color':'rgba(151, 51, 181, .05)', "boxShadow": "7px 7px 7px #9E9E9E", 'width':'90%', 'padding-bottom':'50px'}}>
  
  <div style={{'margin-top':'20px', 'margin-left':'5px', 'width':'97%'}}>
<Accordion>
  <Card>
    <Card.Header style={{'background-color':'#8f384d', 'opacity':'100%'}}>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        <font color="white" size="3">+ Statement Of Purpose (SOPs)</font>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
	    <div style={{'margin-left': '5px', 'margin-top':'20px'}}>
   <div className="ag-theme-alpine" style={{ height: 200, width: 1100 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="name"></AgGridColumn>
                <AgGridColumn field="college"></AgGridColumn>
				<AgGridColumn field="createdon"></AgGridColumn>
                <AgGridColumn field="modifiedon"></AgGridColumn>
				<AgGridColumn field="collegedeadline"></AgGridColumn>
				<AgGridColumn field="document"></AgGridColumn>
            </AgGridReact>
        </div>
	</div>
	
	
	<center><Button variant="info" size="lg" style={{'width':'300px', 'text-align':'center', 'padding':'5px', 'background-color':'#7868e6', 'margin-right':'20px',
	'border':'none', 'margin-top':'20px'}}>
			<font size="2" color="white"><b><a href="/ms/doc-edit" style={{'color':'white'}}>+ Create / Upload New SOP</a></b></font>
          </Button></center>
	

	  </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header style={{'background-color':'#dddddd', 'opacity':'100%'}}>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        <font color="black">+ Letter Of Recommendation (LORs)</font>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header style={{'background-color':'#8f384d', 'opacity':'100%', 'font-color':'white'}}>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        <font color="white">+ Other Documents</font>
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</div>
  
	
	</div>
	</div>
  );
}

export default MSPlannerMD;