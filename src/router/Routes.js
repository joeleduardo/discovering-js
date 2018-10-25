import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = ({ error }) => (
  error ? <div>Error!!!</div> : <div>Loading...</div>
);

const HomePage = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ '../scenes/Home'),
  loading: Loading,
  modules: ['Home']
});

const PostPage = Loadable({
  loader: () => import(/* webpackChunkName: "Post" */ '../scenes/Post.container'),
  loading: Loading,
  modules: ['Post']
});

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/post' component={PostPage}/>
  </Switch>
);

export default Routes;