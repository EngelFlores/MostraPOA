import React,{Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import './index.css';

import Index from './views/HomePage'
import NotFound from './views/NotFound'

const routes = () => (
    <Fragment>
      <Switch>
        <Route path="/index" component={Index} />
        <Redirect exact from="/" to="index" />
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  );
  
  ReactDOM.render(
    <BrowserRouter>{routes()}</BrowserRouter>,
    document.getElementById('root')
  );
  
