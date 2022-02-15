import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux-modules/auth/actions";

class CustomNavbar extends Component {

  handleYesClick= () => {
    this.props.logout();
  }

  render() {
    if (this.props.user.name != null) {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto my-lg-0">
                <Nav.Link as={Link} to="/events/today">
                  Today events
                </Nav.Link>
                <Nav.Link as={Link} to="/add-calendar">
                  Add new calendar
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/user-profile">
                  Hello! {this.props.user.name}
                </Nav.Link>
                <Nav.Link onClick={this.handleYesClick}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    } else {
      return (
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Home
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="me-auto my-lg-0">
                <Nav.Link as={Link} to="/events/today">
                  Today events
                </Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/login">
                  login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
  }
}

function mapStateToProps(state) {
  console.log("update");
  return {
    user: { ...state.auth.user },
  };
}

export default connect(mapStateToProps, { logout })(CustomNavbar);
