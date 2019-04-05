import { combineReducers } from 'redux';
import profile from './profile';
import tasks from './tasks';

export default combineReducers({
  profile,
  tasks
})
