import React, { Component } from "react";
import AuthForm from "./components/auth/AuthForm";
import RegisterForm from "./components/auth/RegisterForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthForm/>
        <RegisterForm/>
      </div>
    );
  }
}

export default App;
