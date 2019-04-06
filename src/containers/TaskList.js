import React, {Component} from 'react'
import { connect } from 'react-redux'

import {fetchTasks} from '../actions/tasks'

class TaskList extends Component {

  componentWillMount(){
    const {user, fetchTasks} = this.props
    fetchTasks(user && user.id)
  }

  render(){
    const {list, className} = this.props
    return <div className={className}>
      <ul className="list-group">
        {list && list.map((task, i) =>
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            <h5 className="mb-1">{task.title}</h5>
            <small></small>
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

export default connect(mapStateToProps, {fetchTasks})(TaskList)