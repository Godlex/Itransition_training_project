import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

class AuthMenu extends Component {
  render() {
    return (
        <Navbar bg="primary" variant="dark"   >
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/login">login</Nav.Link>

              <Nav.Link href="/register">register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AuthMenu;
