import { authConstants } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { constants } from "../../constants/constants";

function* fetchLoginStatus({ email, password }) {
  try {
    let state = [];

    yield fetcher
      .post("/api/Auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        state = response.data;
      });

    localStorage.setItem(constants.JWT_TOKEN, state.token);

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

    let instance = fetcher();

    yield instance
      .post("/api/Auth/register", {
        username: username,
        email: email,
        password: password,
      })
      .then((response) => {
        state = response.data;
      });

    localStorage.setItem(constants.JWT_TOKEN, state.token);

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
