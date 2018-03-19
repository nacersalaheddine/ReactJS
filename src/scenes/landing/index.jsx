import React from 'react'
import { Link } from 'react-router-dom'

const landingPage = () => (
  <div className="container" style={{ maxWidth: "24rem" }}>
    <div className="text-center">
      <img src="/web/svg/react.svg" style={{ width: "6rem", height: "6rem", margin: "1rem" }} />
      <h5 className="card-title">{'Welcome to React web'}</h5>
    </div>
  </div>
)

export const Component = landingPage
