import React, { useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from './UserContext';
import NavbarTop from './NavbarTop';
import styles from './css/Navbar.module.css';

function AppNavbar() {
  const { user, setUser } = useContext(UserContext);
  const history = useNavigate ();

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/logout`, {}, {
        withCredentials: true
      });
      setUser(null);  // This should trigger updates across all components using the user context
      history.push('/');  // Redirect to the homepage
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      <NavbarTop />
      <Navbar className={styles.navbarContainer} variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>Stock Price Prediction</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggler} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={`mx-auto ${styles.navMenu}`}>
              <Nav.Link as={Link} to="/" className={styles.navLink}>Home</Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/prediction" className={styles.navLink}>Prediction</Nav.Link>
                  <NavDropdown title="About Project & Models" id="basic-nav-dropdown" className={styles.navDropdown}>
                    <NavDropdown.Item as={Link} to="/project" className={styles.dropdownItem}>About Project</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/finbert" className={styles.dropdownItem}>Finbert</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/lstm" className={styles.dropdownItem}>LSTM</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/gru" className={styles.dropdownItem}>GRU</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link as={Link} to="/services" className={styles.navLink}>Services</Nav.Link>
                  <Nav.Link as={Link} to="/contact" className={styles.navLink}>Contact US</Nav.Link>
                  <Nav.Link as={Link} to="/about" className={styles.navLink}>About Us</Nav.Link>
                  <Nav.Link onClick={handleLogout} className={styles.navLink}>Logout</Nav.Link>
                </>
              )}
              {!user && (
                <>
                  <Nav.Link as={Link} to="/login" className={styles.navLink}>Login</Nav.Link>
                  <Nav.Link as={Link} to="/register" className={styles.navLink}>Register</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
