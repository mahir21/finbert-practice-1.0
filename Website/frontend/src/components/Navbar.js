import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import NavbarTop from './NavbarTop'; 
import styles from './css/Navbar.module.css'; 

function AppNavbar() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    // Implement logout functionality here
    setLoggedIn(false);
  };

  return (
    <>
      <NavbarTop />
      <Navbar className={styles.navbarContainer} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/" className={styles.navbarBrand}>Stock Price Prediction</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.navMenu}`}> 
              <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
              <Nav.Link href="/prediction" className={styles.navLink}>Prediction</Nav.Link>
              <NavDropdown title="About Project & Models" id="basic-nav-dropdown" className={styles.navDropdown}>
              <NavDropdown.Item href="/project" className={styles.dropdownItem}>About Project</NavDropdown.Item>
                <NavDropdown.Item href="/finbert" className={styles.dropdownItem}>Finbert</NavDropdown.Item>
                <NavDropdown.Item href="/lstm" className={styles.dropdownItem}>LSTM</NavDropdown.Item>
                <NavDropdown.Item href="/gru" className={styles.dropdownItem}>GRU</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/services" className={styles.navLink}>Services</Nav.Link>
              <Nav.Link href="/contact" className={styles.navLink}>Contact US</Nav.Link>
              <Nav.Link href="/about" className={styles.navLink}>About Us</Nav.Link>
            </Nav>
            {loggedIn ? (
              <Nav>
                <Nav.Link href="/logout" className={styles.navLink} onClick={handleLogout}>Logout</Nav.Link>
              </Nav>
            ) : null}
            {!loggedIn ? (
              <Nav>
                <Nav.Link href="/login" className={styles.navLink}>Login</Nav.Link>
                <Nav.Link href="/register" className={styles.navLink}>Register</Nav.Link>
              </Nav>
            ) : null}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
