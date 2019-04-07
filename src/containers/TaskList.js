import React, {Component} from 'react'
import { connect } from 'react-redux'
import cn from 'classnames'
import PropTypes from "prop-types"

import {fetchTasks} from '../actions/tasks'
import {fetchProfile} from '../actions/profile'

class TaskList extends Component {

  componentWillMount(){
    const {user, fetchTasks, fetchProfile} = this.props
    fetchTasks(user && user.id)
    fetchProfile(user && user.id)
  }

  render(){
    const {list, users, className} = this.props
    return <div className={className}>
      <ul className="list-group">
        {list && list.map((task, i) =>
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            <h5 className="mb-1">
              {task.completed && <s>{task.title}</s>}
              {!task.completed && task.title}
            </h5>
            <small>{users[task.userId] && users[task.userId].name}</small>
          </li>
        )}
      </ul>
    </div>
  }
}

const mapStateToProps = (state, props) => {
  return {
    list: (props.userId && state.tasks.list &&
      state.tasks.list.filter(task => task.userId === props.userId)) ||
      state.tasks.list,
    users: state.profile.user
  }
}

export default connect(mapStateToProps, {
  fetchTasks,
  fetchProfile
})(TaskList)

TaskList.propTypes = {
  user: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.numer,
    id: PropTypes.numer,
    title: PropTypes.string,
    completed: PropTypes.bool
  }))
}