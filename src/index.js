import React from 'react'
import ReactDOM from 'react-dom'
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncComponent from './components/AsyncComponent'

const homePage = () => import(/* webpackChunkName: "home" */ './scenes/home')
const profilePage = () => import(/* webpackChunkName: "profile" */ './scenes/profile')
const authPage = () => import(/* webpackChunkName: "auth" */ './scenes/auth')
const joinPage = () => import(/* webpackChunkName: "join" */ './scenes/join')

var auth = {
  isAuthenticated: false,
}

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={() => <AsyncComponent moduleProvider={auth.isAuthenticated ? homePage : authPage} />} />
      <Route exact path='/Profile' component={auth.isAuthenticated ?
        () => <AsyncComponent moduleProvider={profilePage} /> : () => <Redirect to='/' />} />
      <Route exact path='/Join' component={!auth.isAuthenticated ?
        () => <AsyncComponent moduleProvider={joinPage} /> : () => <Redirect to='/' />} />
    </div>
  </Router>
  ,
  document.getElementById('appContainer')
)
