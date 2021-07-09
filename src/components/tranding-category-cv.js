import React from "react";
import { Container, Jumbotron, Badge } from "react-bootstrap";
import axios from 'axios';

function TrendingSection() {
  
let [responseData, setResponseData] = React.useState('');
  const fetchData = React.useCallback(() => {
    axios({
      "method": "GET",
      "url": "http://localhost:5344/trending-subjects",
      "headers": {
        "content-type": "application/json",
      }, "params": {
        "language_code": "en"
      }
    })
    .then((response) => {
      setResponseData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])
  React.useEffect(() => {
    fetchData()
  }, [fetchData])	
	
  return (
    console.log(responseData),
    <div id="trending-section-wrapper">
      <Container fluid>
        <Jumbotron>
          <h1>Trending Subjects</h1>
          <div className="category-wrapper">
		  {responseData && responseData['data'].map((subject, key) => {
			  return (
				<Badge variant="primary" className="category-badge">
				{subject.name}
				</Badge>
			  )
		  })}
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default TrendingSection;
