import React from 'react';
import {  BrowserRouter ,Route, Switch, Redirect } from 'react-router-dom';

import Login from './../layout/login'
import Register from './../layout/register'
import Dashboard from './../layout/dashboard'
import NotFound from './notFound';

export const Routes = () => (
    <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            <Route exact component={Login} path="/login"/>
            <Route exact component={Register} path="/register"/>
            <Route exact component={Dashboard} path="/home"/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
    </>
)


export default Routes;