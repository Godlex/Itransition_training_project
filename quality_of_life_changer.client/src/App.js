import React, { Component } from "react";
import AuthForm from "./components/auth/AuthForm";
import RegisterForm from "./components/auth/RegisterForm";
import { Link, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Router</h1>

        <Nav>
          <Nav.Item>
            <Nav.Link href="/login">AuthForm</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/register">RegisterForm</Nav.Link>
          </Nav.Item>
        </Nav>

        <div>
          <Routes>
            <Route path="/login" element={<AuthForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
