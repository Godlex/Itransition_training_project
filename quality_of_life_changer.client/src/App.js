import React, { Component } from "react";
import AuthForm from "./components/auth/AuthForm";
import RegisterForm from "./components/auth/RegisterForm";
import LogoutForm from "./components/auth/LogoutForm";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AuthMenu from "./components/auth/AuthMenu";
import TodayEventsForm from "./components/events/TodayEventsForm";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthMenu />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<AuthForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/logout" element={<LogoutForm />} />
            <Route path="/events-today" element={<TodayEventsForm />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
