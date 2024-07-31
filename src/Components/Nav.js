import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import LOGO from "../Images/darklogo.svg";
import Logo2 from "../Images/SOLACEtext.svg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");

  const navBackgroundStyle = {
    background: 'transparent',
    padding: "15px 0",
    width: "100%",
    margin: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1000,
  };

  const navLinkStyle = {
    margin: '0 5px',
    color: 'rgba(255, 255, 255, 0.7)',
    padding: '8px 15px',
    borderRadius: '20px',
    transition: 'all 0.3s ease',
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#121212',
  };

  const buttonStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    color: '#121212',
    borderRadius: '20px',
    padding: '8px 15px',
  };

  const centerNavStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '25px',
    padding: '5px',
    maxWidth: 'fit-content',
    margin: '0 auto',
  };

  const toggleButtonStyle = {
    border: '1px solid rgba(255, 255, 255, 0.5)',
    backgroundColor: 'transparent',
  };

  const toggleIconStyle = {
    backgroundColor: 'transparent',
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
  };

  return (
    <Navbar style={navBackgroundStyle} expand="lg" variant="dark" className="w-100">
      <Container fluid>
        <Navbar.Brand className="fw-bold" href="#home">
          <span>
            <img src={LOGO} alt="Logo" style={{ width: "20px", height: "auto" }} />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={toggleButtonStyle}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon" style={toggleIconStyle}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
          <Nav style={centerNavStyle}>
            <Nav.Link 
              href="#bridge" 
              style={activeNav === "bridge" ? activeNavLinkStyle : navLinkStyle}
              onClick={() => handleNavClick("bridge")}
            >
              BRIDGE
            </Nav.Link>
            <Nav.Link 
              href="#docs" 
              style={activeNav === "docs" ? activeNavLinkStyle : navLinkStyle}
              onClick={() => handleNavClick("docs")}
            >
              DOCS
            </Nav.Link>
            <Nav.Link 
              href="#logo" 
              style={activeNav === "logo" ? activeNavLinkStyle : navLinkStyle}
              onClick={() => handleNavClick("logo")}
            >
              <img src={LOGO} alt="Logo" style={{ width: "20px", height: "auto" }} />
            </Nav.Link>
            <Nav.Link 
              href="#pro" 
              style={activeNav === "pro" ? activeNavLinkStyle : navLinkStyle}
              onClick={() => handleNavClick("pro")}
            >
              Pro
            </Nav.Link>
            <Nav.Link 
              href="#docs2" 
              style={activeNav === "docs2" ? activeNavLinkStyle : navLinkStyle}
              onClick={() => handleNavClick("docs2")}
            >
              Docs
            </Nav.Link>
          </Nav>
          <Button variant="primary" style={buttonStyle} onClick={() => document.getElementById('submit').scrollIntoView({ behavior: 'smooth' })}>
            Join Waitlist
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;