import React, { PureComponent } from "react";

class ErrorsBoundary extends PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    isError: false,
  };
  static getDerivedStateFromError() {
    return {
      isError: true,
    };
  }
  componentDidCatch(error, errorInfo) {
    console.log(`Error: ${error}`);
    console.log(errorInfo);
  }
  render() {
    if (this.state.isError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
export default ErrorsBoundary;
