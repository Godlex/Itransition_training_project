import React, { Component } from "react";
import LoginForm from "./components/auth/login-form";
import RegisterForm from "./components/auth/register-form";
import LogoutPage from "./components/auth/logout-page";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/home/home-page";
import AuthMenu from "./components/auth/auth-menu";
import TodayEventsPage from "./components/events/today-events-page";
import ProfilePage from "./components/profile/profile-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuthMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/events-today" element={<TodayEventsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
