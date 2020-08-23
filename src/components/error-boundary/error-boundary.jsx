import React, { Component } from "react";
import ErrorIndicator from "../error-indicator/error-indicator";

/**
 * @description
 *  Helper element to handle render errors
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

    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default ErrorBoundary;
