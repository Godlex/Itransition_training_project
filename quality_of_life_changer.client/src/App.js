import React, { Component } from "react";
import LoginForm from "./components/auth/login-form";
import RegisterForm from "./components/auth/register-form";
import LogoutForm from "./components/auth/logout-page";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import AuthMenu from "./components/auth/auth-menu";
import TodayEventsForm from "./components/events/today-events-form";
import ProfileForm from "./components/profile/profile-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/logout" element={<LogoutForm />} />
          <Route path="/events-today" element={<TodayEventsForm />} />
          <Route path="/profile" element={<ProfileForm />} />
        </Routes>
      </div>
    );
  }
}

export default App;
