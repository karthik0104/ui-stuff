import React from "react"
import { Chrono } from "react-chrono";
  
 function MSPlanner() {
	 const items = [{
      title: "20th April",
      cardTitle: "Letter Of Recommendation (LoR)",
      cardSubtitle:"1 Day Left",
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
	  cardHeight: "1"
    },
	{
      title: "25th April",
      cardTitle: "Statement Of Purpose (SOP)",
      cardSubtitle:'3 Days Left',
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
	  cardHeight: "1"
    },
	{
      title: "25th April",
      cardTitle: "Statement Of Purpose (SOP)",
      cardSubtitle:'3 Days Left',
      cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
	  cardHeight: "1"
    }];
	 
  return (
      <div style={{ width: "750px", height: "1050px" }}>
    <Chrono
      items={items}
      mode="VERTICAL"
    >
	<div>
	An LoR is a testimonial from others that you are skilled with some technologies, and also your character
	<hr></hr>
	<p><b><font color="grey">Task Completed</font></b></p>
    </div>
    <div>
	An SoP is a document which contains details about you, and what your goal is, and why you want to join a college.
	<hr></hr>
	<p><a href=""><b>Plan Task&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="red">Start Task</font></b></a></p>
    </div>
	</Chrono>
  </div>
  );
}
export default MSPlanner;
