import { authConstants } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { constants } from "../../constants/constants";
import { toastr } from "react-redux-toastr";

function* fetchLoginStatus({ email, password }) {
  try {
    toastr.info("Wait server response");
    const { data } = yield fetcher.post("/api/auth/login", {
      email: email,
      password: password,
    });

    localStorage.setItem(constants.JWT_TOKEN, data.token);

    yield toastr.success("Login success");

    let tokenPayload = JSON.parse(window.atob(data.token.split(".")[1]));

    yield put(
      actions.setUser(
        tokenPayload.nameid,
        tokenPayload.unique_name,
        tokenPayload.email,
        true
      )
    );
  } catch (error) {
    if (!error.response) {
      yield toastr.error("server is not available");
    } else {
      yield toastr.error("Login failed", error.response.data.Message);
    }
  }
}

function* fetchRegisterStatus({ username, email, password, confirmPassword }) {
  try {
    toastr.info("Wait server response");
    const { data } = yield fetcher.post("/api/auth/register", {
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });

    localStorage.setItem(constants.JWT_TOKEN, data.token);

    yield toastr.success("Register success");

    let tokenPayload = JSON.parse(window.atob(data.token.split(".")[1]));

    yield put(
      actions.setUser(
        tokenPayload.nameid,
        tokenPayload.unique_name,
        tokenPayload.email,
        true
      )
    );
  } catch (error) {
    if (!error.response) {
      yield toastr.error("server is not available");
    } else {
      yield toastr.error("Register failed", error.response.data.Message);
    }
  }
}

function* logout() {
  yield localStorage.removeItem(constants.JWT_TOKEN);
  yield put(actions.setUser());
  yield toastr.info("Logout");
}

function* authSaga() {
  yield takeEvery(authConstants.LOGIN_ATTEMPT, fetchLoginStatus);
  yield takeEvery(authConstants.REGISTER_ATTEMPT, fetchRegisterStatus);
  yield takeEvery(authConstants.LOGOUT_SUCCESS, logout);
}

export default authSaga;
