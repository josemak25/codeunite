import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReadPost from './PostPage/ReadPost';
import HomePage from './Homepage/Homepage';

const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={ReadPost} />
      </Switch>
    </Router>
  );
};

export default Navigator;
