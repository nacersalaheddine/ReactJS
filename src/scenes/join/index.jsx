import React from 'react'
import { Link } from 'react-router-dom'

const joinPage = () => (
  <div className="container" style={{ maxWidth: "30rem" }}>
    <div className="text-center" style={{ margin: "1rem 0 0 0" }}>
      <img src="/web/svg/react.svg" style={{ width: "4rem", height: "4rem", margin: "0 1rem 0 0" }} />
      <a className="display-4 align-bottom">{'Join React web'}</a>
    </div>
    <div className="" style={{ margin: "1rem 0" }}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
          <small id="usernameHelp" className="form-text text-muted">{'This will be your username.'}</small>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="text" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
          <small id="emailHelp" className="form-text text-muted">{'We\'ll never share your email with anyone else.'}</small>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" aria-describedby="passwordHelp" placeholder="Password" />
          <small id="passwordHelp" className="form-text text-muted">{'Use at least one lowercase letter, one numeral, and seven characters.'}</small>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm your password</label>
          <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm password" />
        </div>
        <div className="form-group border-top border-bottom" style={{ padding: "1rem 0" }}>
          {'By clicking on "Create an account" below, you are agreeing to the '}
          <Link to="/Terms">{'Terms of Service'}</Link>{' and the '}<Link to="/Privacy">{'Privacy Policy'}</Link>.
        </div>
        <button className="btn btn-success">Create an account</button>
      </div>
    </div>
    <div className="card" style={{ margin: "1rem 0" }}>
      <div className="card-body text-center">
        <div className="align-middle">{'Already a member ?'} <Link to="/">Sign in instead</Link></div>
      </div>
    </div>
  </div>
)

export const Component = joinPage
