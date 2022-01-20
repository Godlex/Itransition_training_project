import React, { Component } from "react";
import AuthForm from "./components/auth/auth-form";
import RegisterForm from "./components/auth/register-form";
import LogoutForm from "./components/auth/logout-form";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AuthMenu from "./components/auth/auth-menu";
import TodayEventsForm from "./components/events/today-events-form";

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
            <Route path="/profile" element={<TodayEventsForm />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
