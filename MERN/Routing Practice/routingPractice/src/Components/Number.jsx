import React from 'react';
import { useParams } from 'react-router-dom';

const Number = () => {
  const { value } = useParams();
  
  return (
    <h1>{isNaN(+value) ? `Not a number: ${value}` : `The number is: ${value}`}</h1>
  );
}

export default Number;