import React from "react";
import { Container, Jumbotron, Badge } from "react-bootstrap";

function TrendingSection() {
  return (
    <div id="trending-section-wrapper">
      <Container fluid>
        <Jumbotron>
          <h1>Trending Job Category</h1>
          <div className="category-wrapper">
            <Badge variant="primary" className="category-badge">
              C++
            </Badge>
            <Badge variant="primary" className="category-badge">
              JAVA
            </Badge>
            <Badge variant="primary" className="category-badge">
              Data Entry
            </Badge>
            <Badge variant="primary" className="category-badge">
              Physics
            </Badge>
            <Badge variant="primary" className="category-badge">
              Statistics
            </Badge>
            <Badge variant="primary" className="category-badge">
              Python
            </Badge>
            <Badge variant="primary" className="category-badge">
              Analytics
            </Badge>
            <Badge variant="primary" className="category-badge">
              Chemistry
            </Badge>
            <Badge variant="primary" className="category-badge">
              Essay Writing
            </Badge>
            <Badge variant="primary" className="category-badge">
              Android
            </Badge>
            <Badge variant="primary" className="category-badge">
              Piano/Casio
            </Badge>
            <Badge variant="primary" className="category-badge">
              English Grammer
            </Badge>
          </div>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default TrendingSection;
