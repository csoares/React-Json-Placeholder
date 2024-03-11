import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import About from "./components/About";
import Home from "./components/Home";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/tasks">Tasks</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Row>
            <Col>
              {/* Route components are rendered if the path prop matches the current URL */}
              <Route path="/home" component={Home} />
              <Route path="/tasks" component={ListTasks} />
              <Route path="/about" component={About} />
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
