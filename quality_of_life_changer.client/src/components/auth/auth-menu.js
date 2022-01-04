import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";

class AuthMenu extends Component {
  render() {
    if (this.props.isLoggedIn) {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/logout">Logout</Nav.Link>

                <Nav.Link href="/">microsoft</Nav.Link>

                <Nav.Link  href="/">Hello! {this.props.userName}</Nav.Link>
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

function mapStateToProps(state) {
  console.log(state.auth.user.isLoggedIn);
  return {
    isLoggedIn: state.auth.user.isLoggedIn,
    userName: state.auth.user.name,
  };
}

export default connect(mapStateToProps)(AuthMenu);
