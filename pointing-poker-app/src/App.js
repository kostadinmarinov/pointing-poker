import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>
            <Link className="navbar-brand" to="/">Home</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Link className="nav-link" to="/login">Login</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
