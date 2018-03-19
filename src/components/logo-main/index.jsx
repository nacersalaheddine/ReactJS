import React from 'react'
import { Link } from 'react-router-dom'


class LogoMain extends React.Component {
  render() {
    let size = "4rem"
    switch (this.props.size) {
      case "big":
        size = "6rem"
        break;
    }
    return (
      <Link to="/">
        <img src="/web/svg/react.svg" style={{ width: size, height: size }} />
      </Link>
    );
  }
}

export default LogoMain
