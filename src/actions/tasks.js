import {takeEvery, put, call, cancel, select} from 'redux-saga/effects'
import {baseUrl} from '../config'

export const TODOS_FETCH = "TODOS_FETCH"
export const TODOS_REQUEST = "TODOS_REQUEST"
export const TODOS_REQUEST_SUCCESS = "TODOS_REQUEST_SUCCESS"
export const TODOS_REQUEST_FAILED = "TODOS_REQUEST_FAILED"

export const fetchTasks = userId => (
  {
    type: TODOS_FETCH,
    userId
  }
)

export const requestTasks = () => (
  {
    type: TODOS_REQUEST
  }
)

export const requestTasksSuccess = data => (
  {
    type: TODOS_REQUEST_SUCCESS,
    data
  }
)

export const requestTasksFailed = e => (
  {
    type: TODOS_REQUEST_FAILED,
    e
  }
)

export function* watchFetchTasks() {
  yield takeEvery(TODOS_FETCH, fetchTasksSaga)
}

export function* fetchTasksSaga(action) {
  const id = action.userId
  const state = yield select()
  state.tasks.list && (yield cancel())
  try {
    yield put(requestTasks())
    const data = yield call(
      () => fetch(`${baseUrl}todos${id ? '?userId=' + id : ''}`).then(
        res => res.json()
      )
    )
    yield put(requestTasksSuccess(data))
  } catch (e) {
    yield put(requestTasksFailed(e))
  }
}