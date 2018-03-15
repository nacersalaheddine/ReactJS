import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncComponent from './components/AsyncComponent'

const homePage = () => import(/* webpackChunkName: "home" */ './scenes/home')
const profilePage = () => import(/* webpackChunkName: "profile" */ './scenes/profile')
const authPage = () => import(/* webpackChunkName: "auth" */ './scenes/auth')

var auth = {
  isAuthenticated: false,
}

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={() => <AsyncComponent moduleProvider={auth.isAuthenticated ? homePage : authPage} />} />
      <Route exact path='/Profile' component={() => <AsyncComponent moduleProvider={profilePage} />} />
    </div>
  </Router>
  ,
  document.getElementById('appContainer')
)
