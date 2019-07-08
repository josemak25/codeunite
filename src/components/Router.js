import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReadPost from './PostPage/ReadPost';
import HomePage from './Homepage/Homepage';
import Login from './Registration/Login';
import Dashboard from './Dashboard/Dashboard';

const Navigator = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/:id" component={ReadPost} />
      </Switch>
    </Router>
  );
};

export default Navigator;
 