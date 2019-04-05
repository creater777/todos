import {
  PROFILE_REQUEST,
  PROFILE_REQUEST_SUCCESS,
  PROFILE_REQUEST_FAILED
} from "../actions/profile"

const initState = {
  user: []
}

export default function(state = initState, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        fetch: true
      }
    case PROFILE_REQUEST_SUCCESS:
      window.__DATA__ = action.data
      return {
        user: action.data,
        fetch: false,
        error: false
      }
    case PROFILE_REQUEST_FAILED:
      console.log(action.e)
      return {
        ...state,
        fetch: false,
        error: true
      }
    default:
      return state
  }
}
