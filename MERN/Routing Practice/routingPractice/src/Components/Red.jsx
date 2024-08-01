import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';

const Red = () => {
  const { word, color, bgColor } = useParams();
  
  return (
    <h1 style={{ color: color, backgroundColor: bgColor }}>
      The word is: {word}
    </h1>
  );
}

export default Red;