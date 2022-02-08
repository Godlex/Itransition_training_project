import { put, takeEvery } from "redux-saga/effects";
import { profileConstants } from "./constants";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";

function* fetchUserCalendars({ id }) {
  try {
    let state = [];
    yield fetcher
      .get("api/user/", { id }, "/profile/calendars", {})
      .then((response) => {
        state = response.data;
      });

    yield put(actions.setCalendars(state.calendars));
  } catch (error) {
    console.log(error);
  }
}

function* profileSaga() {
  yield takeEvery(profileConstants.GET_USER_CALENDARS, fetchUserCalendars);
}

export default profileSaga;
