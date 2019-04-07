import {
  PROFILE_EDIT,
  PROFILE_REQUEST,
  PROFILE_REQUEST_SUCCESS,
  PROFILE_REQUEST_FAILED
} from "../actions/profile"
import {userId} from '../config'

const initState = {
  user: {}
}

export default function(state = initState, action) {
  switch (action.type) {
    case PROFILE_REQUEST:
      return {
        ...state,
        fetch: true
      }
    case PROFILE_EDIT:
    case PROFILE_REQUEST_SUCCESS:
      const data = {}
      action.data.forEach(user => data[user.id] = user)
      window.__DATA__ = {}
      window.__DATA__.user = data[userId]
      return {
        user: data,
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
