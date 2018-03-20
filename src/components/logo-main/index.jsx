import React from 'react'
import { Link } from 'react-router-dom'


class LogoMain extends React.Component {
  render() {
    let size = '4rem'
    this.props.size == 'big' ? size = '6rem' : 1
    return (
      <Link to="/">
        <img src="/web/svg/react.svg" style={{ width: size, height: size }} />
      </Link>
    );
  }
}

export default LogoMain
