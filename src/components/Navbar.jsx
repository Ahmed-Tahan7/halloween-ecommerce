// src/NavBar.js
import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <Navbar className="navbar navbar-custom" expand="lg" >
      <Container>
        <Navbar.Brand href="#home" className="logo">
          <img
            src="src\assets\logo_small_5b1691ef-6497-466e-9a7d-c6e5eb818fa1.avif"
            alt="LOGO"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto home">
            <Nav.Link href="#home" className="nav-link-custom">
              Home
            </Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="">Category 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Collections" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Category 1</NavDropdown.Item>
              <NavDropdown.Item href="">Category 2</NavDropdown.Item>
              <NavDropdown.Item href="">Category 3</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
              <NavDropdown.Item href="">Post 1</NavDropdown.Item>
              <NavDropdown.Item href="">Post 2</NavDropdown.Item>
              <NavDropdown.Item href="">Post 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#search" className="icon-link">
              <FaSearch />
            </Nav.Link>
            <Nav.Link href="#favorites" className="icon-link">
              <FaHeart />
            </Nav.Link>
            <Nav.Link href="#cart" className="icon-link">
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
