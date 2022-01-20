import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { constants } from "../../constants/constants";

class AuthMenu extends Component {
  render() {
    let token = localStorage.getItem(constants.JWT_TOKEN);
    if (token != null) {
      let tokenPlayload = JSON.parse(window.atob(token.split(".")[1]));
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/logout">Logout</Nav.Link>

                <Nav.Link href="/profile">
                  Hello! {tokenPlayload.unique_name}
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

function mapStateToProps(state) {
  console.log(state.auth.user.isLoggedIn);
  return {
    isLoggedIn: state.auth.user.isLoggedIn,
    userName: state.auth.user.name,
  };
}

export default connect(mapStateToProps)(AuthMenu);
