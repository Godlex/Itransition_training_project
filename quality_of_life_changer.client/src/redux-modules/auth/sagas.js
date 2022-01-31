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

    let tokenPayload = JSON.parse(window.atob(state.token.split(".")[1]));

    yield put(
      actions.setUser(
        tokenPayload.nameid,
        tokenPayload.unique_name,
        tokenPayload.email,
        true,
      )
    );
    
  } catch (error) {
    console.log(error);
  }
}

function* fetchRegisterStatus({ username, email, password, confirmPassword }) {
  try {
    let state = [];

    console.log({ username, email, password, confirmPassword });

    

    yield fetcher.post("/api/Auth/register", {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((response) => {
        state = response.data;
      });

    localStorage.setItem(constants.JWT_TOKEN, state.token);

    let tokenPayload = JSON.parse(window.atob(state.token.split(".")[1]));

    yield put(
      actions.setUser(
        tokenPayload.nameid,
        tokenPayload.unique_name,
        tokenPayload.email
      )
    );
  } catch (error) {
    console.log(error);
  }
}

function* deleteToken() {
  yield localStorage.removeItem(constants.JWT_TOKEN);
}

function* authSaga() {
  yield takeEvery(authConstants.LOGIN_SUCCESS, fetchLoginStatus);
  yield takeEvery(authConstants.REGISTER_SUCCESS, fetchRegisterStatus);
  yield takeEvery(authConstants.LOGOUT_SUCCESS,deleteToken)
}

export default authSaga;
