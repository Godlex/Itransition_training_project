import { authConstants } from "./constants";
import { takeEvery } from "redux-saga/effects";

function* fetchLoginStatus({ username, password }) {
  try {
    const state = yield fetch(`${authConstants.BASE_URL}/api/Auth/login`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, password: password }),
    }).then((response) => response.json());
    
  } catch (e) {}
}

function* loginSaga() {
  yield takeEvery(authConstants.LOGIN_SUCCESS, fetchLoginStatus);
}

export default loginSaga;
