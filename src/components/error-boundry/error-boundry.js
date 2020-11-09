import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  };

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true})
  }

  render() {

    const { hasError} = this.state;

    if (hasError) {
      return <ErrorIndicator />
    }

    return (
      this.props.children
    )
  }

}

