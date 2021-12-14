import { authConstants } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";

function* fetchLoginStatus({ username, password }) {
  try {
    const state = yield fetch(`${authConstants.BASE_URL}/api/Auth/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`
      },
      body: JSON.stringify({ email: username, password }),
    }).then((response) => response.json());

    localStorage.setItem("jwtToken", state.token);

    let tokenPlayload = JSON.parse(window.atob(state.token.split('.')[1]));
  
    yield put(actions.setUser(tokenPlayload.nameid,tokenPlayload.unique_name,tokenPlayload.email))

  } catch (e) {}
}

function* loginSaga() {
  yield takeEvery(authConstants.LOGIN_SUCCESS, fetchLoginStatus);
}

export default loginSaga;
