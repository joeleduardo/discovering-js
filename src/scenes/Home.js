import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card'
import './Home.css';

class Home extends React.Component {
  render() {
    return(
      <Layout>
        <div className='postList'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </Layout>
    )
  }
}

export default Home;