import "./App.css";
import Searchbar from "./Searchbar.js";
import Footer from "./Footer.js";
import { useState } from "react";

// Fuse is for the search bar
import Fuse from "fuse.js";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Container } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

// Json File with the contact data
import posts from "./data.json";

function App() {
  const [query, updateQuery] = useState("");

  const fuse = new Fuse(posts, {
    keys: [
      {
        name: "firstName",
        weight: 0.5,
      },
      {
        name: "lastName",
        weight: 0.7,
      },
      {
        name: "title",
        weight: 0.1,
      },
      {
        name: "location",
        weight: 0.1,
      },
      {
        name: "number",
        weight: 0.1,
      },
    ],
  });

  const results = fuse.search(query);

  const postResults = query ? results : posts;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  return (
    <Router>
      {
        <div className="root-container">
          <div className="centered-container">
            <Searchbar searchQuery={query} setSearchQuery={onSearch} />
          </div>

          <Container>
            <Row>
              {postResults.map((posts, index) => (
                // Do not forget to add the key (index) to the root of the map container
                <Col key={index} xs={12} md={4} lg={3}>
                  {/* Found that solution here:  https://stackoverflow.com/a/68041165/14386721*/}

                  <Card className="card-object">
                    {/* <Card.Img src="https://via.placeholder.com/150x75" /> */}
                    <Card.Body>
                      <Card.Title>
                        {posts.firstName + " " + posts.lastName}
                      </Card.Title>
                      <Card.Subtitle className="card-object-subtitle">
                        {posts.number}
                      </Card.Subtitle>
                      <Card.Subtitle className="card-object-subtitle">
                        {posts.location}
                      </Card.Subtitle>
                      <Card.Text>{posts.title}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <Footer />
        </div>
      }
    </Router>
  );
}

export default App;
