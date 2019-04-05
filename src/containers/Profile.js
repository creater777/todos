import React, {Component} from 'react'
import { connect } from 'react-redux'

import {userId} from '../config'
import {fetchProfile} from '../actions/profile'

import NavBar from './NavBar'
import ProfileForm from '../components/ProfileForm'
import TaskList from './TaskList'

class Profile extends Component {

  componentWillMount(){
    this.props.fetchProfile(userId)
  }

  render() {
    const {user} = this.props
    return [
      <NavBar key="nav-bar"/>,
      <div key="container" className="container">
        <h2>Задачи {user && user.name}</h2>
        {
          user && <div className="row">
            <ProfileForm className="col-md-4" user={user}/>
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