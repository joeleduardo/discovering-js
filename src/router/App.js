import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from '../scenes/Home';
import PostContainer from '../scenes/Post.container';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/post" component={PostContainer} />
    </div>
  </Router>
);

export default App;
