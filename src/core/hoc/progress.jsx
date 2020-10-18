import React, { Component } from 'react';

const Progress = (WrappedComponent) =>
  class extends Component {
    componentDidMount() {
      const NProgress = window.NProgress;
      NProgress.done();
    }

    handleLoad = () => {
      const NProgress = window.NProgress;
      NProgress.configure({ easing: 'ease', speed: 1000, showSpinner: false });
      NProgress.start();
    };
    render() {
      this.handleLoad();
      return <WrappedComponent {...this.props} {...this.state} />;
    }
  };

export default Progress;
