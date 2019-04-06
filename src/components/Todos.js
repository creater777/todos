import React from 'react'
import NavBar from '../containers/NavBar'
import TaskList from '../containers/TaskList'

export default () =>
  [
    <NavBar key="nav-bar"/>,
    <div key="container" className="container">
      <h2>Все задачи</h2>
      <TaskList className="mb-1"/>
    </div>
  ]