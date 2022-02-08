import { put, takeEvery } from "redux-saga/effects";
import { profileConstants } from "./constants";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { toastr } from "react-redux-toastr";

function* fetchUserCalendars({ id }) {
  try {
    const { data } = yield fetcher.get(
      "api/user/",
      { id },
      "/profile/calendars"
    );
    toastr.success("Your calendars loaded");
    yield put(actions.setCalendars(data.calendars));
  } catch (error) {
    console.log(error);
    toastr.error("Error", error.message);
  }
}

function* profileSaga() {
  yield takeEvery(profileConstants.GET_USER_CALENDARS, fetchUserCalendars);
}

export default profileSaga;
