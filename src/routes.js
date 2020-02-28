import React, { Component } from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

export default class Routes extends Component {
  render() {
    return (
    <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home/:usuario" component={Home}/>
    </Switch>
    </BrowserRouter>
    );
  }
}
