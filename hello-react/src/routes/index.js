import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../components/common/history';

import Home from '../components/common/Home';
import NoMatch from '../components/common/404';
import Login from '../components/common/Login';

class MRoute extends Component {
  render() {
    return (
      <Router history={history} >
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}

export default MRoute;