import React from 'react';
import Person from "./components/person";
import './App.css';

function App() {
  return (
    <>
      <Person firstname={'Jane'} lastname={'Doe'} age={45} haircolor={'Black'} />
      <Person firstname={'John'} lastname={'Smith'} age={88} haircolor={'Brown'} />
    </>
  );
}

export default App;
