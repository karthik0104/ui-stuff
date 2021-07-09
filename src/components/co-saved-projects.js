import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import axios from 'axios';
import  { Redirect, useHistory } from 'react-router-dom'

class SavedProjectsTable extends Component {
	routingFunction = () => {
		this.props.history.push('/client-onboarding');
	};
	
    constructor(props) {
        super(props);

	axios.get("http://10.166.90.51:8102/projects")
		.then(response => {
			console.log(response['data']['data'])
			this.setState({
            columnDefs: [
                {headerName: 'Project ID', field: 'projectid', maxHeight: '200px'},
				{headerName: 'Project Name', field: 'projectname', cellRenderer: (params) => {
        var link = document.createElement('a');
        //link.href = params.data.link1;
		link.href = 'saved-projects/' + params.data.projectid;
        link.innerText = params.value;
        link.addEventListener('click', (e) => {
            //e.preventDefault();
            //console.log(params.data.link1);
			
        });
        return link;
    }},
                {headerName: 'Created At', field: 'createdon'},
                {headerName: 'Last Run At', field: 'lastrunon'},
				{headerName: 'Schema Name', field: 'clientname'}

            ],
            rowData: response['data']['data']
        });
		});
    }
	

    render() {
        return (
			<div
                className="ag-theme-balham"
                style={{ height: '300px', width: '1000px', 'font-size':'16px' }}
            >
			{this.state?<AgGridReact
				enableFilter={true}
				enableSorting={true}
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}>
                </AgGridReact>:''}
                
		</div>
        );
    }
}

export default SavedProjectsTable;