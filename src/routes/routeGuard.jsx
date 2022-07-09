import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import NotFound from "../views/NotFound";

export const PublicRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthed } = React.useContext(UserContext);
  return !isAuthed ? (
    <Route {...rest} path={path} render={(props) => <Component {...props} />} />
  ) : (
    <Redirect to="/auth/blog" />
  );
};

export const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthed, isLoading } = React.useContext(UserContext);
  if (isLoading === true) {
    return <div>Loading</div>;
  }
  return isAuthed ? (
    <Route {...rest} path={path} render={(props) => <Component {...props} />} />
  ) : (
    <Route component={NotFound} status={404} />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};
