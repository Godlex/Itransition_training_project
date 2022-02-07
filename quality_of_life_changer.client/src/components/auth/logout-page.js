import { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { logout } from "../../redux-modules/auth/actions";

class LogoutPage extends Component {
  constructor(props) {
    super(props);
    this.handleYesClick = this.handleYesClick.bind(this);
  }

  handleYesClick() {
    this.props.logout();
  }

  render() {
    return (
      <Container className="logout">
        <h1>you want to exit? </h1>

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
    );
  }
}

export default connect(null, { logout })(LogoutPage);
