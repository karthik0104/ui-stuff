import React from "react";
import axios from "axios";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

class PostConfirmForm extends React.Component {
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

  render() {
	  return (
	  <React.Fragment>
	  <div id="student-asgn-form" className="form-group">
	  <div id="step-heading">
		<hr/>
		&#10102; It seems you are a returning user.
	  </div>
      <label htmlFor="email">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
		placeholder="sample@example.com"
        />
	   
    </div>
	  </React.Fragment>
	  );
  }

}

export default PostConfirmForm;