import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/sagas";
import userProfileSaga from "./user-profile/sagas";
import eventsSaga from "./calendars/sagas";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(eventsSaga), fork(userProfileSaga)]);
}
