import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

/**
 * @description
 *  Wrapper component for handling render errors
 */
class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
