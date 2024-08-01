// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AccountInfo from './components/AccountInfo';
import CraftPizza from './components/CraftPizza';
import Order from './components/Order';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/account" element={<AccountInfo />} />
                    <Route path="/craft-pizza" element={<CraftPizza />} />
                    <Route path="/order" element={<Order />} />
                </Routes>
            </div>
        </Router>
    );
}
   
export default App;
