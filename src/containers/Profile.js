import React, {Component} from 'react'
import { connect } from 'react-redux'

import {userId} from '../config'
import {fetchProfile} from '../actions/profile'

import NavBar from './NavBar'
import ProfileForm from '../components/ProfileForm'
import TaskList from './TaskList'

class Profile extends Component {

  componentWillMount(){
    this.setState({
      editing: false
    })
    this.props.fetchProfile(userId)
  }

  handleEdit(){
    this.setState({
      editing: !this.state.editing,
      form: this.props.user
    })
  }

  handleSave(e){
    window.__DATA__ = {}
    window.__DATA__.user = this.state.form
    this.setState({
      editing: false
    })
  }

  handleChange(e){
    const val = this.state.form
    val[e.target.id] = e.target.value
    this.setState({
      form: val
    })
  }

  render() {
    const {user} = this.props
    const {editing} = this.state
    return [
      <NavBar key="nav-bar"/>,
      <div key="container" className="container">
        <h2>Задачи {user && user.name}</h2>
        {
          user &&
          <div className="row">
            <ProfileForm
              className="col-md-4"
              user={user}
              editing={editing}
              handleEdit={this.handleEdit.bind(this)}
              handleSave={this.handleSave.bind(this)}
              handleChange={this.handleChange.bind(this)}
            />
            <TaskList className="col-md-8" userId={user.id}/>
          </div>
        }
      </div>
    ]
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.profile.user[0],
    fetch: state.profile
  }
}

export default connect(mapStateToProps, {fetchProfile})(Profile)