import { put, takeEvery } from "redux-saga/effects";
import { eventsConstants } from "./constants";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";

function* fetchTodayEvents() {
  try {
    let state = [];
    yield fetcher.get("/api/Calendar/events/today", {}).then((response) => {
      state = response.data;
    });

    yield put(actions.setEvents(state.events));
  } catch (error) {
    console.log(error);
  }
}

function* eventsSaga() {
  yield takeEvery(eventsConstants.GET_TODAY_EVENTS, fetchTodayEvents);
}

export default eventsSaga;
