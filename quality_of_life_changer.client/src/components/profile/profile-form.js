import { Component } from "react";
import { Card } from "react-bootstrap";
import { constants } from "../../constants/constants";

export default class ProfileForm extends Component {
  render() {
    let token = localStorage.getItem(constants.JWT_TOKEN);

    if (token == null) {
      window.location.href = "/login";
    }

    let tokenPlayload = JSON.parse(window.atob(token.split(".")[1]));

    return (
      <div>
        <Card>
          <Card.Header>{tokenPlayload.unique_name}</Card.Header>
          <Card.Body>
            <Card.Title>Email - {tokenPlayload.email}</Card.Title>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
