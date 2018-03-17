import React, { PureComponent } from 'react'

export default class AsyncComponent extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      Component: null,
    }
  }

  componentWillMount() {
    if (!this.state.Component) {
      this.props.moduleProvider().then(({ Component }) => this.setState({ Component }))
    }
  }

  render() {
    const { Component } = this.state
    const { loadingComponent } = this.props

    return (
      <div>
        {Component ? <Component /> : loadingComponent}
      </div>
    )
  }
}
