import React from "react";
import axios from "axios";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

class MasterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      email:  '',
	  mobile: '',
      username: '',
      password: '', 
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }
   
  handleSubmit = event => {
    event.preventDefault()
    const { email, mobile, username, password } = this.state
	
	axios({
		url: 'http://localhost:5344/trending-subjects',
		// configuration
	})
	.then(response => {
		// do something with JSON response data
		alert(`Your registration detail: \n 
           Email: ${email} \n
		   Mobile: ${mobile} \n
           Username: ${username} \n
           Password: ${password}`)
		
		window.location = "/student/hw/confirm"
	})
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep >= 2? 3: currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep !==1){
    return (
      <button 
        className="btn btn-secondary btn-previous" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary btn-next" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }
  return null;
}
  
  render() {
	let ok = 1;
	
	if (ok <2) {
    return (
      <React.Fragment>
	  <img
        src={require('../assets/images/research.jpg')}
        width="480"
        height="960"
		style={{float:'left'}}
        alt="React Bootstrap logo"
      />
	  <div id="post-asgn">
	  <p><b>Post Your Requirement</b></p>
	  </div>
	  <div id="steps-container">
		<div id="left-element">
			<div id="steps">
			Step 1 &nbsp; &ensp; &#9658;
			</div>
			
			<div id="stepinfo">
			Contact Details
			</div>
		</div>
		
		<div id="right-element">
			<div id="steps">
			Step 2 &nbsp; &emsp; &#9658;
			</div>
			
			<div id="stepinfo">
			Requirement Details
			</div>
		</div>
		
		<div id="right-element">
			<div id="steps">
			Step 3
			</div>
			
			<div id="stepinfo">
			Attachments
			</div>
		</div>
		
	  </div>

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          email={this.state.email}
		  mobile={this.state.mobile}
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          username={this.state.username}
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          password={this.state.password}
        />
        {this.nextButton()}
		{this.previousButton()}

      </form>
      </React.Fragment>
    );
  } else {
	  return (<React.Fragment></React.Fragment>);
  }
  } 
  
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div id="student-asgn-form" className="form-group">
	  <div id="step-heading">
		<hr/>
		&#10102; Contact Details
	  </div>
      <label htmlFor="email">Email address</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="text"
		placeholder="sample@example.com"
        value={props.email}
        onChange={props.handleChange}
        />
	   
	  <label htmlFor="mobile">Mobile Number (Won't be showing publicly by default)</label>
      <input
        className="form-control"
        id="mobile"
        name="mobile"
        type="text"
		placeholder="+91-XXXXX-XXXXX"
        value={props.mobile}
        onChange={props.handleChange}
        />
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
    <div id="student-asgn-form" className="form-group">
	  <div id="step-heading">
		<hr/>
		&#10103; Requirement Details
	  </div>
      <label htmlFor="title">Title</label>
      <input
        className="form-control"
        id="title"
        name="title"
        type="text"
		placeholder="e.g. Trigonometry Assignment"
        value={props.title}
        onChange={props.handleChange}
        />
	   
	  <label htmlFor="desc">Description</label>
      <input
        className="form-control"
        id="desc"
        name="desc"
        type="text"
		placeholder="Including details about the requirement would help tutors understand better"
        value={props.desc}
        onChange={props.handleChange}
        />
	  <label htmlFor="desc">Deadline</label>
	  <div id="cal">
	  <Calendar className="react-calendar"/>
	  </div>
    </div>
  );
}

function Step3(props) {
  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <React.Fragment>
    <div id="student-asgn-form" className="form-group">
	  <div id="step-heading">
		<hr/>
		&#10103; Requirement Details
	  </div>
      <label htmlFor="title">Title</label>
      <input
        className="form-control"
        id="title"
        name="title"
        type="text"
		placeholder="e.g. Trigonometry Assignment"
        value={props.title}
        onChange={props.handleChange}
        />
	   
	  <label htmlFor="desc">Description</label>
      <input
        className="form-control"
        id="desc"
        name="desc"
        type="text"
		placeholder="Including details about the requirement would help tutors understand better"
        value={props.desc}
        onChange={props.handleChange}
        />
		
	  <label htmlFor="desc">Deadline</label>
	  <Calendar/>
    </div>
	<button className="btn-next">Confirm & Post</button>
    </React.Fragment>
  );
}

export default MasterForm;