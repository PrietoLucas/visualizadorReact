import React, { Component } from 'react';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

export default class src extends Component {
  render() {
    return (
    <BrowserRouter>
    <Switch>
        <Route path="/" component={Login} />
        <Route path="/home" component={Home}/>
    </Switch>
    </BrowserRouter>
    );
  }
}
