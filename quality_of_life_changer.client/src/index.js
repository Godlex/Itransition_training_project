import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { constants } from "./constants/constants";
import { authConstants } from "./redux-modules/auth/constants";
import ReduxToastr from "react-redux-toastr";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-redux-toastr/lib/css/react-redux-toastr.min.css";

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

    <ReduxToastr
      timeOut={4000}
      newestOnTop={false}
      preventDuplicates
      position="top-center"
      getState={(state) => state.toastr}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick
    />
  </Provider>,
  document.getElementById("root")
);
