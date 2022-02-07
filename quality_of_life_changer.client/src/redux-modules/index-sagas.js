import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/sagas";
import calendarsSaga from "./calendars/sagas";
import eventsSaga from "./events/sagas";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(eventsSaga), fork(calendarsSaga)]);
}
