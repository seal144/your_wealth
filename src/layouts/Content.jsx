import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Main from '../pages/Main';

const Content = () => {
  return (
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/main' component={Main}/>
      <Redirect to='/' /> 
    </Switch>
  )
};

export default Content