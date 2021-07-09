import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import ProfileDetails from "./pages/profile-details";
import StudentProfileDetails from "./pages/student-profile-details";
import EditProfileDetails from "./pages/edit-profile-details";
import JobLists from "./pages/jobs-list";
import TutorLists from "./pages/tutor-list";
import SignInModal from "./pages/signin-modal";
import SignUpModal from "./pages/signup-modal";
import CompletedProfileModal from "./pages/complete-profile-modal";
import MasterForm from "./pages/student-asgn-form"
import PostConfirmForm from "./pages/post-confirm"
import ChatBox from "./pages/chat"
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import LandingPageCV from "./pages/landing-page-cv";
import NavbarCV from "./components/navbar-cv";
import SignInModalCV from "./pages/signin-modal-cv";
import SignUpModalCV from "./pages/signup-modal-cv";
import OfferingCV from "./pages/offering-cv";
import Offering1CV from "./pages/offering1-cv";
import MenuTest from "./pages/menu-test";
import LandingPageOwn from "./pages/landing-page-own";
import LandingPageArticles from "./pages/landing-page-articles";

import ClientOnboarding from "./pages/client-onboarding";
import SavedProjects from "./pages/saved-projects2";
import ClientOnboardingLogin from "./pages/client-onboarding-login";
import NavbarCO from "./components/navbar-co";
import ClientOnboardingSavedProjects from "./pages/client-onboarding-saved-projects";

function App() {
  const [signInShow, setSignInShow] = useState(false);
  const [signUpShow, setSignUpShow] = useState(false);
  const [completeProfileShow, setCompleteProfileShow] = useState(false);
  
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);
 
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
	//addResponseMessage(response);
  };

  const handleClose = type => {
    if (type === "signIn") {
      setSignInShow(false);
    } else if (type === "signUp") {
      setSignUpShow(false);
    } else if (type === "completeProfile") {
      setCompleteProfileShow(false);
    }
  };

  const handleShow = type => {
    if (type === "signIn") {
      setSignInShow(true);
    } else if (type === "signUp") {
      setSignUpShow(true);
    } else if (type === "completeProfile") {
      setCompleteProfileShow(true);
    }
  };

  return (
    <>
	  
      <BrowserRouter>
        <Switch>
		
		  
		  <Route path="/" component={LandingPageOwn} exact />
		  <Route path="/articles" component={LandingPageArticles} exact />
		  <Route path="/client-onboarding" component={ClientOnboarding} exact />
		  <Route path="/client-onboarding-login" component={ClientOnboardingLogin} exact />
		  <Route path="/client-onboarding-saved-projects" component={ClientOnboardingSavedProjects} exact />
		  
		  
        </Switch>
      </BrowserRouter>
      <SignInModalCV
        signInShow={signInShow}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <SignUpModalCV
        signUpShow={signUpShow}
        handleClose={handleClose}
        handleShow={handleShow}
      />
      <CompletedProfileModal
        completeProfileShow={completeProfileShow}
        handleClose={handleClose}
      />
	   
    </>
  );
}

export default App;
