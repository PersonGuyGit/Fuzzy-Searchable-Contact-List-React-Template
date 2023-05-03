import "./App.css";
import Searchbar from "./components/Searchbar.js";
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

  const options = {
    keys: [
      {
        name: "firstName",
      },
      {
        name: "lastName",
      },
      {
        name: "title",
      },
      {
        name: "location",
      },
      {
        name: "number",
      },
    ],
    threshold: 0.5,
    distance: 100,
    includeMatches: true,
    findAllMatches: true,
    useExtendedSearch: true,
  };

  const fuse = new Fuse(posts, options);

  const results = fuse.search(query);

  const postResults = query ? results : posts;

  function onSearch({ currentTarget }) {
    updateQuery(currentTarget.value);
  }

  return (
    <Router>
      {
        <div className="root-container">
          <Container>
            <Searchbar searchQuery={query} setSearchQuery={onSearch} />
            <Row>
              {postResults.map((posts, index) => (
                // Do not forget to add the key (index) to the root of the map container
                <Col key={index} xs={12} md={4} lg={3} className="mb-3">
                  {/* Found that solution here:  https://stackoverflow.com/a/68041165/14386721*/}

                  <Card className="card-object h-100">
                    {/* <Card.Img src="https://via.placeholder.com/150x75" /> */}
                    <Card.Body>
                      <Card.Title className="card-title">
                        {posts.firstName + " " + posts.lastName}
                      </Card.Title>
                      <Card.Subtitle>
                        <i>{posts.title}</i>
                      </Card.Subtitle>
                      <Card.Text className="card-object-subtitle">
                        <strong>Phone:</strong> {posts.number}
                        <br></br>
                        <strong>Address:</strong> {posts.location}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      }
    </Router>
  );
}

export default App;
