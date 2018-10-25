import React from 'react';
import Card from '../components/Card'
import './Home.css';

class Home extends React.Component {
  render() {
    return(
      <div className='postList'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    )
  }
}

export default Home;