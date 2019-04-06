import React from "react";
import {withRouter} from "react-router";
import {NavLink} from "react-router-dom";

const pages = ["tasks", "profile"];
const labels = ["Все задачи", "Мои задачи"]

class NavBar extends React.Component {
  render() {
    const user = window.__DATA__ && window.__DATA__.user
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {pages.map(this._renderLink)}
          </ul>
          <span className="navbar-text">{user && user.name}</span>
        </div>
      </nav>
    );
  }

  _renderLink(page, i = -1) {
    return (
      <li key={i} className="nav-item">
        <NavLink
          className="nav-link"
          activeClassName="active"
          to={`/${page}`}
        >
          {i > -1 && labels[i]}
        </NavLink>
      </li>
    );
  }
}

export default withRouter(NavBar);
