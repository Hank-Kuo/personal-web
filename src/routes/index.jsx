import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from './routeGuard';
import Index from '../views/Index';
import Blog from '../views/Blog';
import About from '../views/About';
import Contact from '../views/Contact';
import Project from '../views/Project';
import NotFound from '../views/NotFound';
import Article from '../views/Article';
import Header from '../layout/Header';
import CreateBlog from '../views/CreateBlog';
import Login from '../views/Login';


export default function () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/project" component={Project} />
        <Route exact path="/blog/article/:id" component={Article} />
        <PublicRoute exact path="/login" component={Login} />
        <PrivateRoute exact path="/auth/blog" component={CreateBlog} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>
  );
}
