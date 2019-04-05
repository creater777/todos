import {PROFILE_FETCH, requestProfile, requestTasksFailed, requestTasksSuccess} from "../actions/profile";
import {baseUrl} from "../config"
import {call, put, takeEvery} from "redux-saga/dist/redux-saga-effects-npm-proxy.cjs"

export function* watchFetchProfile() {
  yield takeEvery(PROFILE_FETCH, fetchProfileSaga)
}

export function* fetchProfileSaga(id) {
  try {
    yield put(requestProfile())
    const data = yield call(
      () => fetch(`${baseUrl}users${id && ('/' + id)}`)
    ).then(
      res => res.json()
    )
    yield put(requestTasksSuccess(data))
  } catch (e) {
    yield requestTasksFailed()
  }
}