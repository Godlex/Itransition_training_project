import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { constants } from "./constants/constants";
import { authConstants } from "./redux-modules/auth/constants";

const token = localStorage.getItem(constants.JWT_TOKEN);
if (token) {
  let tokenPayload = JSON.parse(window.atob(token.split(".")[1]));
  store.dispatch({
    type: authConstants.SET_USER,
    id: tokenPayload.nameid,
    name: tokenPayload.unique_name,
    email: tokenPayload.email,
    isAuth: true,
  });
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
