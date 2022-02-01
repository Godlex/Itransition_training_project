import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import { register } from "../../redux-modules/auth/actions";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "", password: "", confirmPassword: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // Changing state
    this.props.register(
      this.state.username,
      this.state.email,
      this.state.password,
      this.state.confirmPassword
    );
  }

  handleChange(event) {
    // Changing state
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    if (this.props.user.isAuth) {
      return <Navigate to="/" />;
    }
    return (
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="username"
            type="string"
            placeholder="Enter name"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="button" onClick={this.handleClick}>
          Submit
        </Button>
      </Form>
    );
  }
}

function update(state) {
  return {
    user: { ...state.auth.user },
  };
}

export default connect(update, { register })(RegisterForm);