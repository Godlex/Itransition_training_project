import { put, takeEvery } from "redux-saga/effects";
import { userProfileConstants } from "./constants";
import * as actions from "./actions";
import fetcher from "../../utils/fetcher";
import { toastr } from "react-redux-toastr";

function* fetchUserCalendars({ id }) {
  try {
    toastr.info("Wait server response");
    const { data } = yield fetcher.get(
      `"api/user/",${id},"/profile/calendars"`
    );
    toastr.success("Your calendars loaded");
    yield put(actions.setCalendars(data.calendars));
  } catch (error) {
    console.log(error);
    toastr.error("Error", error.response.data.Message);
  }
}

function* userProfileSaga() {
  yield takeEvery(userProfileConstants.GET_USER_CALENDARS, fetchUserCalendars);
}

export default userProfileSaga;
