import React, { Component } from "react";

import Toast from "../components/Toast";

const ErrorContext = React.createContext();
const ErrorConsumer = ErrorContext.Consumer;

class ErrorProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isErr: false,
      message: "出現神奇的錯誤",
      detail: "",
      close: false,
    };
  }

  setError = (err) => {
    let msg = "";
    switch (err.response.status) {
      case 404:
        msg = "找不到該頁面";
        break;
      case 500:
        msg = "伺服器出錯";
        break;
      case 503:
        msg = "服務失效";
        break;
      default:
        msg = "出現神奇的錯誤";
        break;
    }

    this.setState(() => ({
      isErr: true,
      message: msg,
      detail: err,
    }));

    setTimeout(() => {
      this.setState(() => ({
        isErr: false,
        close: true,
      }));
    }, 5000);
  };

  render() {
    return (
      <ErrorContext.Provider
        value={{
          ...this.state,
          setError: this.setError,
        }}
      >
        {this.props.children}
        <Toast
          message={this.state.message}
          show={this.state.isErr}
          onClick={() => {
            this.setState(() => ({
              isErr: false,
              close: true,
            }));
          }}
        />
      </ErrorContext.Provider>
    );
  }
}

const withErrorConsumer = (WrappedComponent) => {
  const innerComponent = (props) => (
    <ErrorConsumer>{(value) => <WrappedComponent {...props} errorContext={value} />}</ErrorConsumer>
  );
  return innerComponent;
};

export {
  ErrorProvider, ErrorConsumer, ErrorContext, withErrorConsumer,
};
