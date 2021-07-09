import React, { useState, useEffect }  from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 
import 'react-chat-widget/lib/styles.css';
 
function ChatBox() {
  useEffect(() => {
    addResponseMessage('Welcome to this awesome chat!');
  }, []);
 
  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
	//addResponseMessage(response);
  };
 
  
  return (
      <div className="ChatBox">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
   
}
 
export default ChatBox;