import React from 'react'
import { Link } from 'react-router-dom'
import LogoMain from '../../components/logo-main'
import LoginCard from '../../components/login-card'

const loginPage = () => (
  <div className="container" style={{ maxWidth: '24rem' }}>
    <div className="text-center" >
      <div style={{ padding: '1rem 0' }}><LogoMain size="big" /></div>
      <h5 className="card-title">{'Sign in to React web'}</h5>
    </div>
    <LoginCard />
    <div className="card">
      <div className="card-body text-center">
        <div className="align-middle">{'New to React web ?'} <Link to="/Join">Create an account</Link></div>
      </div>
    </div>
  </div>
)

export const Component = loginPage
