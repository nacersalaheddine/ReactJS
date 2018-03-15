import React from 'react'
import { Link } from 'react-router-dom'

const authPage = () => (
  <div className="container" style={{ maxWidth: "24rem" }}>
    <div className="text-center">
      <img src="/web/svg/react.svg" style={{ width: "6rem", margin: "1rem" }} />
      <h5 className="card-title">{'Sign in to React web'}</h5>
    </div>
    <div className="card" style={{ margin: "1rem 0" }}>
      <div className="card-body">
        <div className="form-group">
          <label htmlFor="username">Email address</label>
          <input type="text" className="form-control" id="username" placeholder="Enter username or email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password" />
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox mr-sm-2">
            <input type="checkbox" className="custom-control-input" id="keep" />
            <label className="custom-control-label" htmlFor="keep">Keep me signed in</label>
          </div>
        </div>
        <button className="btn btn-success w-100">Sign in</button>
      </div>
    </div>
    <div className="card">
      <div className="card-body text-center">
        <div className="align-middle">{'New to React web ?'} <Link to="/join">Create an account</Link></div>
      </div>
    </div>
  </div>
)

export const Component = authPage
