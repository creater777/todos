import {
  TODOS_REQUEST,
  TODOS_REQUEST_SUCCESS,
  TODOS_REQUEST_FAILED
} from "../actions/tasks"

const initState = {
  list: null,
  fetch: false,
  error: false
}

export default function(state = initState, action) {
  switch (action.type) {
    case TODOS_REQUEST:
      return {
        ...state,
        fetch: true
      }
    case TODOS_REQUEST_SUCCESS:
      return {
        list: action.data,
        fetch: false,
        error: false
      }
    case TODOS_REQUEST_FAILED:
      console.error(action.e)
      return {
        ...state,
        fetch: false,
        error: action.e
      }
    default:
      return state
  }
}
