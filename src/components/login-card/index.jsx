import React from 'react'

class LoginCard extends React.Component {
  render() {
    return (
      <div className="card" style={{ margin: "1rem 0" }}>
        <div className="card-body">
          <div className="form-group">
            <label htmlFor="username">Username or email address</label>
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
    )
  }
}

export default LoginCard
