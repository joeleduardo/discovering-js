import React from 'react';
import './Layout.css';

const Layout = props => {
  return(
    <div>
      <header>Discovering JS</header>
      <div className='wrapper'>
        { props.children }
      </div>
    </div>
  )
}

export default Layout;