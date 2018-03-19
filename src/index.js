import React from 'react'
import ReactDOM from 'react-dom'
import { Switch, Redirect, BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncComponent from './components/AsyncComponent/'
import LoadingMain from './components/loading-main/'

const homePage = () => import(/* webpackChunkName: "home" */ './scenes/home')
const landingPage = () => import(/* webpackChunkName: "landing" */ './scenes/landing')
const accountPage = () => import(/* webpackChunkName: "account" */ './scenes/account')
const loginPage = () => import(/* webpackChunkName: "login" */ './scenes/login')
const joinPage = () => import(/* webpackChunkName: "join" */ './scenes/join')
const notFoundPage = () => import(/* webpackChunkName: "not-found" */ './scenes/not-found')

var auth = {
  isAuthenticated: false,
}

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path='/' component={() => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={auth.isAuthenticated ?
          homePage : landingPage} />} />
        <Route exact path='/Account' component={auth.isAuthenticated ?
          () => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={accountPage} /> : () => <Redirect to='/' />} />
        <Route exact path='/Login' component={!auth.isAuthenticated ?
          () => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={loginPage} /> : () => <Redirect to='/' />} />
        <Route exact path='/Join' component={!auth.isAuthenticated ?
          () => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={joinPage} /> : () => <Redirect to='/' />} />
        <Route component={() => <AsyncComponent loadingComponent={LoadingMain} moduleProvider={notFoundPage} />} />
      </Switch>
    </div>
  </Router>
  ,
  document.getElementById('appContainer')
)
