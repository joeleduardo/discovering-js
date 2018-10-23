import React from 'react';
//import { Link } from "react-router-dom";
import './Card.css';

const Card = props => {
  return(
    <div className='card'>
      <div className='card-image'/>
      <div className='card-content'>
        <h1>Joel Ortiz</h1>
      </div>
    </div>
  )
}

export default Card;