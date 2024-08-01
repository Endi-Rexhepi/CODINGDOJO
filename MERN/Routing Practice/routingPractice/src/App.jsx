import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Hello from './Components/Hello';
import Number from './Components/Number';
import ColorHello from './Components/Red';
import './App.css';
import Red from './Components/Red';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/hello/:word" element={<Hello />} />
        <Route path="/hello/:word/:color/:bgColor" element={<Red />} />
        <Route path="/:value" element={<Number />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;