import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";

class AuthMenu extends Component {
  render() {
    console.log(this.props);
    if (this.props.user.name != null) {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/logout">Logout</Nav.Link>

                <Nav.Link href="/profile">
                  Hello! {this.props.user.name}
                </Nav.Link>
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
}

function update(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(update)(AuthMenu);
