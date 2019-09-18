import { all, fork } from "redux-saga/effects";
import peopleInfoSaga from "./peopleInfoSaga";

function* rootSaga() {
  yield all([fork(peopleInfoSaga)]);
}

export default rootSaga;
