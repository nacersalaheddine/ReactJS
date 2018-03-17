import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncComponent from './components/AsyncComponent/'
import LoadingMain from './components/loading-main/'

const homePage = () => import(/* webpackChunkName: "home" */ './scenes/home')
const profilePage = () => import(/* webpackChunkName: "profile" */ './scenes/profile')
const authPage = () => import(/* webpackChunkName: "auth" */ './scenes/auth')
const joinPage = () => import(/* webpackChunkName: "join" */ './scenes/join')
const notFoundPage = () => import(/* webpackChunkName: "not-found" */ './scenes/not-found')

var auth = {
  isAuthenticated: false,
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={() => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={auth.isAuthenticated ? homePage : authPage} />} />
        <Route exact path='/Profile' component={auth.isAuthenticated ?
          () => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={profilePage} /> : () => <Redirect to='/' />} />
        <Route exact path='/Join' component={!auth.isAuthenticated ?
          () => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={joinPage} /> : () => <Redirect to='/' />} />
        <Route component={() => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={notFoundPage} />} />
      </Switch>
    </div>
  </Router>
  ,
  document.getElementById('appContainer')
)
