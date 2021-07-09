import React, {Component, useState } from 'react';
import { render } from 'react-dom';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg"
import MenuTest from "./menu-test";
import { Card, CardColumns, Button, Form, Col, Toast } from "react-bootstrap";



function uploadImageCallBack(file) {
  return new Promise(
    (resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.imgur.com/3/image');
      xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
      const data = new FormData();
      data.append('image', file);
      xhr.send(data);
      xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        resolve(response);
      });
      xhr.addEventListener('error', () => {
        const error = JSON.parse(xhr.responseText);
        reject(error);
      });
    }
  );
}


class EditorContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }
  
  onEditorStateChange: Function = (editorState) => {
    // console.log(editorState)
    this.setState({
      editorState,
    });
  };

  render(){
    const { editorState } = this.state;
	
    return <div className='editor'>
      <Editor
        editorState={editorState}
        onEditorStateChange={this.onEditorStateChange}    
        toolbar={{
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
          image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
        }}
      />
    </div>
  }
}



function MSPlannerDE() {
	
	const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(true);
  const toggleCloseA = () => setShowA(false);

return (
<div>
<MenuTest></MenuTest>
<div style={{'position':'absolute', 'margin-left':'550px', 'margin-top':'20px'}}>
<center>
<Toast show={showA} onClose={toggleCloseA} autohide="true">
          <Toast.Header>
            <strong className="mr-auto">Saved !</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Your document has successfully been saved</Toast.Body>
        </Toast>
		</center>
	</div>
<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/react-draft-wysiwyg@1.12.3/dist/react-draft-wysiwyg.css' />
  <div style={{'width':'80%', 'height':'50%',
  'margin-left':'100px', 'margin-top': '70px', 'border-width':'100px', 'border-color':'rgba(51, 170, 51, .1)', 'position':'absolute'}}>
  <div>
    <h2>SOP - Penn State 01</h2>
	<Button variant="info" size="lg" style={{'float':'right', 'width':'100px', 'text-align':'center', 'padding':'5px', 'background-color':'#c64756', 'margin-left':'20px',
	'border':'none'}}>
			<font size="2"><b>Close</b></font>
          </Button>
	<Button variant="info" size="lg" style={{'float':'right', 'width':'100px', 'text-align':'center', 'padding':'5px', 'background-color':'#303960', 'margin-left':'20px',
	'border':'none'}} onClick={toggleShowA}>
			<font size="2"><b>Save</b></font>
          </Button>
	
	</div>
    <EditorContainer/>
  </div>
  </div>
  );
}

export default MSPlannerDE;
