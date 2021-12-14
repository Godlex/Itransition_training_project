import { authConstants } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import axios from "axios";

function* fetchLoginStatus({ username, password }) {
  try {
    /*const state1 = yield fetch(`${authConstants.BASE_URL}/api/Auth/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
      },
      body: JSON.stringify({ email: username, password }),
    }).then((response) => response.json()); */

    let state = [];

    yield axios
      .post(`${authConstants.BASE_URL}/api/Auth/login`, {
        email: username,
        password: password,
      })
      .then((response) => {
        state = response.data;
      });

    console.log("state", state);

    localStorage.setItem("jwtToken", state.token);

    console.log("jwt", localStorage.getItem("jwtToken"));

    let tokenPlayload = JSON.parse(window.atob(state.token.split(".")[1]));

    yield put(
      actions.setUser(
        tokenPlayload.nameid,
        tokenPlayload.unique_name,
        tokenPlayload.email
      )
    );
  } catch (error) {
    console.log(error);
  }
}

function* loginSaga() {
  yield takeEvery(authConstants.LOGIN_SUCCESS, fetchLoginStatus);
}

export default loginSaga;
