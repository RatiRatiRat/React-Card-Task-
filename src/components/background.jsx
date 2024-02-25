// Background.js
import React from 'react';
import './style-background.css'; // Import CSS file
import lewisHamiltonImage from '../images/lewis-hamilto.png';





const Background = () => {
  return (
    <div className='background'> 
      <img src={lewisHamiltonImage} alt="code-image" className='Image' /> 
    </div>
  );
}

export default Background;


