import React from 'react';
import { useParams } from 'react-router-dom';

const Hello = () => {
  const { word } = useParams();
  
  return (
    <h1>The word is: {word || "Hello"}</h1>
  );
}

export default Hello;