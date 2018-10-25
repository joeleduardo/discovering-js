import React from 'react';
import Routes from './router/Routes';
import './App.css';

const App = () => (
  <div>
    <header>Discovering Js</header>
    <main role='main' className='wrapper'>
      <Routes />
    </main>
  </div>
);

export default App;
