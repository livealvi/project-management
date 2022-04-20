import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const history = useHistory();
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="w-100"
      >
        <Container>
          <Link className="brand text-white" to="/">
            Project Management
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <div>
                <Link className="nav_bar text-white" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="nav_bar text-white" to="/contact">
                  Contact
                </Link>
                <Link className="nav_bar text-white" to="/about">
                  About
                </Link>
              </div>
              <div>
                <Link className="nav_bar text-white" to="/signin">
                  Login
                </Link>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  history.replace("/signin");
                }}
              >
                Logout
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
