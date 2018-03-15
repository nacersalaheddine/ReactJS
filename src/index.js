import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AsyncComponent from './components/AsyncComponent'

const homePage = () => import(/* webpackChunkName: "home" */ './scenes/home')
const countryPage = () => import(/* webpackChunkName: "country" */ './scenes/country')
const acadPage = () => import(/* webpackChunkName: "acad" */ './scenes/acad')
const subPage = () => import(/* webpackChunkName: "sub" */ './scenes/sub')
const secPage = () => import(/* webpackChunkName: "sec" */ './scenes/sec')

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={() => <AsyncComponent moduleProvider={homePage} />} />
      <Route exact path='/:countryCode([a-z]{2})' component={() => <AsyncComponent moduleProvider={countryPage} />} />
      <Route exact path='/:countryCode([a-z]{2})/:acadCode([a-z0-9]{2,10})' component={() => <AsyncComponent moduleProvider={acadPage} />} />
      <Route exact path='/:countryCode([a-z]{2})/:acadCode([a-z0-9]{2,10})(/[a-z0-9]{2,10})+' component={() => <AsyncComponent moduleProvider={subPage} />} />
      <Route exact path='/:countryCode([a-z]{2})/:acadCode([a-z0-9]{2,10})(/[a-z0-9]{2,10})+(/@[a-z0-9]{2,10})' component={() => <AsyncComponent moduleProvider={secPage} />} />
    </div>
  </Router>
  ,
  document.getElementById('appContainer')
)
