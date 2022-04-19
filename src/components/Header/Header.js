import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="brand text-white" to="/">
            Project Management
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav_bar text-white" to="/dashboard">
                Dashboard
              </Link>
              <Link className="nav_bar text-white" to="/contact">
                Contact
              </Link>
              <Link className="nav_bar text-white" to="/about">
                About
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
