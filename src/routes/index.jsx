import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Header from '../layout/Header';
const Index = React.lazy(() => import('../views/Index'));
const Blog = React.lazy(() => import('../views/Blog'));
const About = React.lazy(() => import('../views/About'));
const Contact = React.lazy(() => import('../views/Contact'));
const Project = React.lazy(() => import('../views/Project'));
const NotFound = React.lazy(() => import('../views/NotFound'));
const Article = React.lazy(() => import('../views/Article'));
const CreateBlog = React.lazy(() => import('../views/CreateBlog'));
const Login = React.lazy(() => import('../views/Login'));
import Loading from '../components/Loading';

// func
import { PublicRoute, PrivateRoute } from './routeGuard';

export default function () {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Router>
  );
}
