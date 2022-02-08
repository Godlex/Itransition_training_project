import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/sagas";
import profileSaga from "./profile/sagas";
import eventsSaga from "./events/sagas";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(eventsSaga), fork(profileSaga)]);
}
