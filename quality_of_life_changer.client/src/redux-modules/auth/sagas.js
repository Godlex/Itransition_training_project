import { authConstants } from "./constants";
import { takeEvery } from "redux-saga/effects";

function fetchLoginStatus(login, password) {
    console.log("aaa");
  try {
    console.log(login);
/*
    fetch(`https://localhost:7145/api/Auth/login`, {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email:login,password: password }),
    }).then((response) => response.json());
*/
  } catch (e) {}
}

function* loginSaga(login, password) {
    console.log(login);
  yield takeEvery(
    authConstants.LOGIN_SUCCESS,
    fetchLoginStatus(login, password)
  );
}

export default loginSaga();
