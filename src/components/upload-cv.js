import axios from 'axios'; 
  
import React,{Component} from 'react'; 
import { Container, CardGroup, Card, Button, Tab, Tabs, Row, Col, Nav, Form, InputGroup, FormControl } from "react-bootstrap";
  
class UploadCV extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      selectedFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
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
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("http://localhost:5344/cv/api/uploadfile", formData, config); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div> 
            <p>File Name: {this.state.selectedFile.name}</p> 
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
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  } 
  
  export default UploadCV; 
