import { authConstants } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import axios from "axios";

function* fetchLoginStatus({ email, password }) {
  try {
    let state = [];

    yield axios
      .post(`${authConstants.BASE_URL}/api/Auth/login`, {
        email: email,
        password: password,
      })
      .then(
        (response) => {
          state = response.data;
        },
        {
          headers: {
            Authorization: 'Bearer' + localStorage.getItem("jwtToken"),
          },
        }
      );

    localStorage.setItem("jwtToken", state.token);

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

function* fetchRegisterStatus({ username, email, password }) {
  try {
    let state = [];

    yield axios
      .post(
        `${authConstants.BASE_URL}/api/Auth/register`,
        {
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization:  'Bearer' + localStorage.getItem("jwtToken"),
          },
        }
      )
      .then((response) => {
        state = response.data;
      });

    localStorage.setItem("jwtToken", state.token);

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

function* authSaga() {
  yield takeEvery(authConstants.LOGIN_SUCCESS, fetchLoginStatus);
  yield takeEvery(authConstants.REGISTER_SUCCESS, fetchRegisterStatus);
}

export default authSaga;
