import React, { Component } from "react";

const progress = (WrappedComponent) => class extends Component {
  componentDidMount() {
    const { NProgress } = window;
    NProgress.done();
  }

    handleLoad = () => {
      const { NProgress } = window;
      NProgress.configure({ easing: "ease", speed: 1000, showSpinner: false });
      NProgress.start();
    };

    render() {
      this.handleLoad();
      return <WrappedComponent {...this.props} {...this.state} />;
    }
};

export default progress;
