import axios from 'axios'; 
  
import React,{Component} from 'react'; 
import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl, Spinner } from "react-bootstrap";

import { Checkmark } from 'react-checkmark';
  
class UploadNWSFile extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      selectedFile: null,
	  nwsDataTemplateSaved: false,
	  nwsDataTemplateSaving: false
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({selectedFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
	
	const config = {
		onUploadProgress: progressEvent => console.log(progressEvent.loaded)
	}
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      formData.append( 
        "file", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
      ); 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile);

	  this.setState(s => ({ ...s, nwsDataTemplateSaved: false, nwsDataTemplateSaving: true })); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("http://10.166.90.51:8102/upload-nws-file?fileType=".concat(this.props.fileType).concat("&projectName=").concat(this.props.projectName), formData, config).then((response) => {
		this.setState(s => ({ ...s, nwsDataTemplateSaved: true, nwsDataTemplateSaving: false })); 
    }); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
	//const styleB2 = {'width':'200px', 'background-color': '#ce0f3d', 'border-color': '#ce0f3d', 'height':'40px', margin:'10px 10px 10px 10px'};
	const styleB2 = {'width':'200px', 'background-color': '#2b2e4a', 'border-color': '#2b2e4a', 'height':'40px', margin:'10px 10px 10px 10px'};
	
     
      return ( 
        <div> 
            
            <div> 
                <input type="file" onChange={this.onFileChange} /> 
				<Button variant="info" size="lg" block style={styleB2} onClick={this.onFileUpload}>
				<h6>Upload</h6>
				</Button>
				 {this.state.nwsDataTemplateSaved?<div style={{'float':'left'}}>
		  <Checkmark></Checkmark>
		  File Succesfully Uploaded !
			  </div>:''}
			  {this.state.nwsDataTemplateSaving?<div><Spinner animation="border" role="status" style={{'margin-left':'70px', 'margin-top':'0px', 'margin-bottom':'10px'}}></Spinner>File is being uploaded. Please wait...</div>:''}
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
  export default UploadNWSFile; 
