import React, {Component} from 'react'
import { connect } from 'react-redux'
import PropTypes from "prop-types"

import {userId} from '../config'
import {fetchProfile, editProfile} from '../actions/profile'

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
      editing: !this.state.editing
    })
  }

  handleSave(e){
    this.setState({
      editing: false
    })
    this.props.editProfile({
      ...this.props.user,
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      website: e.target.website.value
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
    user: state.profile.user[userId]
  }
}

export default connect(mapStateToProps, {
  fetchProfile,
  editProfile
})(Profile)

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    username: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string
  })
}