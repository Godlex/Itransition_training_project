import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../../redux-modules/auth/actions";

class LogoutForm extends Component {
  constructor(props) {
    super(props);
    this.handleYesClick = this.handleYesClick.bind(this);
  }

  handleYesClick() {
    this.props.logout();
  }

  render() {
    return (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Container>
          <h1>you want to exit?</h1>
        </Container>
        <Container>
          <Button
            variant="primary"
            type="button"
            onClick={this.handleYesClick}
            href="/"
          >
            Yes
          </Button>

          <Button variant="primary" type="button" href="/">
            No
          </Button>
        </Container>
      </Container>
    );
  }
}

export default connect(null, { logout })(LogoutForm);
