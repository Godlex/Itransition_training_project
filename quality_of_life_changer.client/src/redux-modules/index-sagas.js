import { all, fork } from 'redux-saga/effects';
import loginSaga from './auth/sagas';

export default function* rootSaga() {
  yield all([fork(loginSaga)]);
}
