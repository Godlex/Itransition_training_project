import { put, takeEvery } from "redux-saga/effects";
import { eventsConstants } from "./constants";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { toastr } from "react-redux-toastr";

function* fetchTodayEvents() {
  try {
    const { data } = yield fetcher.get("/api/Calendar/events/today");
    toastr.success("Today events loaded");
    yield put(actions.setEvents(data.events));
  } catch (error) {
    console.log(error);
    toastr.error("Error", error.response);
  }
}

function* eventsSaga() {
  yield takeEvery(eventsConstants.GET_TODAY_EVENTS, fetchTodayEvents);
}

export default eventsSaga;
