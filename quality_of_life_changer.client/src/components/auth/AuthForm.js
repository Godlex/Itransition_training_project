import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../redux-modules/auth/actions";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { login:'', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    // Changing state
    this.props.login(this.state.login, this.state.password)
  }

  handleChange(event){
  // Changing state
  this.setState({[event.target.name] :event.target.value})
}

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='login' placeholder="Enter email" value={this.state.login} onChange={this.handleChange}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={this.handleClick}>
          Submit
        </Button>

      </Form>
    );
  }
}

export default connect(null, { login })(AuthForm)