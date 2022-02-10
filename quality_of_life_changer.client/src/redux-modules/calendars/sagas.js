import { put, takeEvery } from "redux-saga/effects";
import { calendarsConstants } from "./constants";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { toastr } from "react-redux-toastr";

function* fetchTodayEvents() {
  try {
    const { data } = yield fetcher.get("/api/Calendar/events/today");
    toastr.success("Today events loaded");
    yield put(actions.setEvents(data.todayEvents));
  } catch (error) {
    console.log(error);
    toastr.error("Error", error.response);
  }
}

function* eventsSaga() {
  yield takeEvery(calendarsConstants.GET_TODAY_EVENTS, fetchTodayEvents);
}

export default eventsSaga;
