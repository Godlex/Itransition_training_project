import { Component } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import "./profile-page.css";

class ProfileForm extends Component {
  render() {
    if (!this.props.user.isAuth) {
      return <Navigate to="/login" />;
    }
    return (
      <Card className="custom-user-card">
        <Card.Header>{this.props.user.name}</Card.Header>
        <Card.Body>
          <Card.Title>Email - {this.props.user.email}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

function update(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(update)(ProfileForm);
