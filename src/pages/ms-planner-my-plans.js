import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardColumns, Button, Form, Col } from "react-bootstrap";
import { render } from 'react-dom';
import MenuTest from "./menu-test";
import NavbarMSH from "../components/navbar-ms-header";

import { AgGridColumn, AgGridReact } from 'ag-grid-react';


function MSPlannerNP() {
      const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
	

    const [rowData, setRowData] = useState([
        { college: "University Of Pennsylvania", course:"MS", specialization: "Computer", admitterm: "Spring 2021", deadline: "15th April", calendar: "View" },
        { college: "Syracuse University", course:"MS", specialization: "Computer", admitterm: "Fall 2021", deadline: "15th April", calendar: "View" },
        { college: "Stanford University", course:"MS", specialization: "Mechanical", admitterm: "Spring 2021", deadline: "15th April", calendar: "View" }
    ]);

    const onGridReady = params => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }
	
	
  return (
  <div>
  <MenuTest></MenuTest>
  
  <div style={{'margin-left':'120px', 'margin-top':'20px'}}>
  <font size="5" color="#333456"><b>My Plans</b></font>
  </div>
  
  <div style={{'border-width':'1px', 'border-radius':'25px', 'border-color':'rgba(51, 170, 51, .1)', 'border-style':'solid', 'margin-left':'125px', 'margin-right':'5px', 'margin-top':'5px', 
  'background-color':'rgba(151, 51, 181, .05)', "boxShadow": "7px 7px 7px #9E9E9E", 'width':'88%', 'padding-bottom':'50px'}}>
  
  <div style={{'margin-left': '20px', 'margin-top':'20px'}}>
   <div className="ag-theme-alpine" style={{ height: 400, width: 1150 }}>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}>
                <AgGridColumn field="college"></AgGridColumn>
                <AgGridColumn field="course"></AgGridColumn>
				<AgGridColumn field="specialization"></AgGridColumn>
                <AgGridColumn field="admitterm"></AgGridColumn>
				<AgGridColumn field="deadline"></AgGridColumn>
				<AgGridColumn field="calendar"></AgGridColumn>
            </AgGridReact>
        </div>
	</div>
	
	</div>
	</div>
  );
}

export default MSPlannerNP;