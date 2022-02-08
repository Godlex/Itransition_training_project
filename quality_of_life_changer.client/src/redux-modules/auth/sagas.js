import { authConstants } from "./constants";
import { put, takeEvery } from "redux-saga/effects";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { constants } from "../../constants/constants";
import { toastr } from "react-redux-toastr";

function* fetchLoginStatus({ email, password }) {
  try {
    const { data } = yield fetcher.post("/api/Auth/login", {
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
    console.log(error);
    toastr.error("Login failed", error.response.data.Message);
  }
}

function* fetchRegisterStatus({ username, email, password, confirmPassword }) {
  try {
    const { data } = yield fetcher.post("/api/Auth/register", {
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
        tokenPayload.email
      )
    );
  } catch (error) {
    console.log(error.response.data.Message);
    toastr.error("Register failed", error.response.data.Message);
  }
}

function* deleteToken() {
  yield localStorage.removeItem(constants.JWT_TOKEN);
}

function* authSaga() {
  yield takeEvery(authConstants.LOGIN_ATTEMPT, fetchLoginStatus);
  yield takeEvery(authConstants.REGISTER_ATTEMPT, fetchRegisterStatus);
  yield takeEvery(authConstants.LOGOUT_SUCCESS, deleteToken);
}

export default authSaga;
