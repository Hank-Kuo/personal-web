import React, { Component } from 'react';

import { getUserCookies, setUserCookies } from '../core/utils/cookie';

const UserContext = React.createContext();

class UserProvider extends Component {
  state = {
    isLoading: false,
    isAuthed: false,
    user: {
      first_name: '',
      last_name: '',
      account: '',
      role: '',
    },
  };
  componentDidMount = async () => {
    const data = await getUserCookies();
    if (data) {
      this.setUserInfo(data);
    }
  };

  setUserInfo = (data) => {
    this.setState(() => ({
      isLoading: true,
    }));
    setUserCookies(data);
    this.setState(() => {
      return {
        isLoading: false,
        isAuthed: true,
        user: {
          account: data.account,
          first_name: data.first_name,
          last_name: data.last_name,
          role: data.role,
        },
      };
    });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          setUserInfo: this.setUserInfo,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserConsumer = UserContext.Consumer;

export const withUserConsumer = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <UserConsumer>
          {(value) => <WrappedComponent {...this.props} context={value} />}
        </UserConsumer>
      );
    }
  };
};

export { UserProvider, UserConsumer, UserContext };
