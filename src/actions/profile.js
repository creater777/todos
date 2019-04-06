import {takeEvery, put, call, select, cancel} from 'redux-saga/effects'
import {baseUrl} from "../config";

export const PROFILE_FETCH = "PROFILE_FETCH"
export const PROFILE_REQUEST = "PROFILE_REQUEST"
export const PROFILE_REQUEST_SUCCESS = "PROFILE_REQUEST_SUCCESS"
export const PROFILE_REQUEST_FAILED = "PROFILE_REQUEST_FAILED"

export function fetchProfile(id) {
  return {
    type: PROFILE_FETCH,
    id
  }
}

export const requestProfile = () => (
  {
    type: PROFILE_REQUEST
  }
)

export const requestProfileSuccess = data => (
  {
    type: PROFILE_REQUEST_SUCCESS,
    data
  }
)

export const requestProfileFailed = e => (
  {
    type: PROFILE_REQUEST_FAILED,
    e
  }
)


export function* watchFetchProfile() {
  yield takeEvery(PROFILE_FETCH, fetchProfileSaga)
}

export function* fetchProfileSaga(action) {
  const id = action.id
  const state = yield select()
  Array.isArray(state.profile.user) && state.profile.user.length && (yield cancel())
  try {
    yield put(requestProfile())
    const data = yield call(
      () => fetch(`${baseUrl}users${id ? '?id=' + id : ''}`).then(
        res => res.json()
      )
    )
    yield put(requestProfileSuccess(data))
  } catch (e) {
    yield put(requestProfileFailed(e))
  }
}