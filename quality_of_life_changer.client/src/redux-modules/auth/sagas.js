import { authConstants } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { constants } from "../../constants/constants";
import { toastr } from "react-redux-toastr";
import store from "../../store";

function* fetchLoginStatus({ email, password }) {
  try {
    toastr.info("Wait server response");
    const { data } = yield fetcher.post("/api/auth/login", {
      email: email,
      password: password,
    });

    localStorage.setItem(constants.JWT_TOKEN, data.token);

    toastr.success("Login success");

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
      toastr.error("server is not available");
    } else {
      toastr.error("Login failed", error.response.data.Message);
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

    toastr.success("Register success");
    localStorage.setItem(constants.JWT_TOKEN, data.token);
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
    toastr.error("Register failed", error.response.data.Message);
  }
}

function* logout() {
  yield toastr.confirm("Exit", {
    onOk: () => deleteToken(),
  });
}

function deleteToken() {
  localStorage.removeItem(constants.JWT_TOKEN);
  store.dispatch(actions.setUser(null, null, null, false));
}

function* authSaga() {
  yield takeEvery(authConstants.LOGIN_ATTEMPT, fetchLoginStatus);
  yield takeEvery(authConstants.REGISTER_ATTEMPT, fetchRegisterStatus);
  yield takeEvery(authConstants.LOGOUT_SUCCESS, logout);
}

export default authSaga;
