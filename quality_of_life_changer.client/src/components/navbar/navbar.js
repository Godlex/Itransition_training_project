import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";

class CustomNavbar extends Component {
  render() {
    if (this.props.user.name != null) {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto my-lg-0">
                <Nav.Link href="/events-today">Today events</Nav.Link>
                <Nav.Link href="/add-calendar">Add new calendar</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/profile">
                  Hello! {this.props.user.name}
                </Nav.Link>
                <Nav.Link href="/logout">Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto my-lg-0">
                <Nav.Link href="/events-today">Today events</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="/login">login</Nav.Link>
                <Nav.Link href="/register">register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }
}

function update(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(update)(CustomNavbar);
