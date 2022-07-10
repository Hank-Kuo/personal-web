import React, { Component } from "react";

import { getUserCookies, setUserCookies } from "../core/utils/cookie";

const UserContext = React.createContext();
const UserConsumer = UserContext.Consumer;

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isAuthed: false,
      user: {
        first_name: "",
        last_name: "",
        account: "",
        role: "",
        uuid: "",
        email: "",
      },
    };
  }

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

    this.setState(() => ({
      isLoading: false,
      isAuthed: true,
      user: {
        account: data.user.account,
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        role: data.user.role,
        uuid: data.user.uuid,
        email: data.user.email,
      },
    }));
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

const withUserConsumer = (WrappedComponent) => {
  const innerComponent = (props) => (
    <UserConsumer>{(value) => <WrappedComponent {...props} userContext={value} />}</UserConsumer>
  );
  return innerComponent;
};

export {
  UserProvider, UserConsumer, UserContext, withUserConsumer,
};
