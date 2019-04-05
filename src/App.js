import React from "react"
import { Switch, Route } from "react-router"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import configureStore from "./store/configureStore"

import Profile from "./containers/Profile"
import Todos from "./components/Todos"

import 'bootstrap/dist/css/bootstrap.min.css'

const store = configureStore()

export default () =>
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Todos}/>
        <Route path="/tasks" component={Todos}/>
        <Route path="/profile/:id*" component={Profile}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </HashRouter>
  </Provider>
