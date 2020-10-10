import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from '../views/Index';
import Blog from '../views/Blog';
import About from '../views/About';
import Contact from '../views/Contact';
import Project from '../views/Project';
import NotFound from '../views/NotFound';
import Article from '../views/Article';
import Header from '../layout/Header';

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
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>
  );
}
