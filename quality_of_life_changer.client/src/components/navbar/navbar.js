import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux-modules/auth/actions";
import CustomModal from "../custom-modal/custom-modal";
import AuthorizedNav from "./nav/authorized-nav";
import UnAuthorizedNav from "./nav/un-authorized-nav";

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  handleClick = () => {
    this.setState({ show: true });
  };

  handleSubmit = () => {
    this.props.logout();
    this.setState({ show: false });
  };

  handleCancel = () => {
    this.setState({ show: false });
  };

  render() {
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
            {this.props.user.name != null ? (
              <AuthorizedNav
                handleClick={this.handleClick}
                name={this.props.user.name}
              />
            ) : (
              <UnAuthorizedNav />
            )}
          </Navbar.Collapse>
        </Container>
        <CustomModal
          show={this.state.show}
          handleCancel={this.handleCancel}
          handleSubmit={this.handleSubmit}
          message={"Do you want to go out?"}
          submitButtonText={"Yes"}
          cancelButtonText={"No"}
          cancelVariant={"danger"}
          submitVariant={"success"}
        />
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(mapStateToProps, { logout })(CustomNavbar);
