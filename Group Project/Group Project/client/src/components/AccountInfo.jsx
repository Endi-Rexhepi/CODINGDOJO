// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useOrders } from '../Contexts/OrderContext';

// const AccountInfo = () => {
//     const { orders } = useOrders();

//     return (
//         <div className="container">
//             <header>
//                 <h1>Pizza Pete's</h1>
//                 <nav>
//                     <Link to="/home">HOME</Link>
//                     <Link to="/order">ORDER ({orders.length})</Link>
//                     <Link to="/account">ACCOUNT</Link>
//                     <Link to="/logout">LOGOUT</Link>
//                 </nav>
//             </header>
//             <div className="account-info">
//                 <form>
//                     <label>First Name: <input type="text" /></label>
//                     <label>Last Name: <input type="text" /></label>
//                     <label>Email: <input type="email" /></label>
//                     <label>Address: <input type="text" /></label>
//                     <label>City: <input type="text" /></label>
//                     <label>State: <input type="text" /></label>
//                     <button type="submit">UPDATE</button>
//                 </form>
//                 <div className="past-orders">
//                     <h2>Past Orders</h2>
//                     <ul>
//                         {orders.map((order, index) => (
//                             <li key={index}>
//                                 {order.createdAt} - {order.size} - {order.toppings.join(', ')} ${order.price.toFixed(2)}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AccountInfo;

// src/components/AccountInfo.jsx

// src/components/AccountInfo.jsx
import React, { useState, useEffect } from 'react';
import useOrders from '../Hooks/useOrders'; 
import Header from './Header';
import axios from 'axios';

const AccountInfo = () => {
    const [orders, setOrders] = useState([]);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',                    
        state: '',
    });
                                                                                 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         
    };

    console.log(orders); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error(error));
    }, []);
    
    

    return (
        <div className="container">
            <Header />
            <div className="account-info">
                <form onSubmit={handleSubmit}>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                    </label>
                    <label>
                        Address:
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                    </label>
                    <label>
                        City:
                        <input type="text" name="city" value={formData.city} onChange={handleChange} />
                    </label>
                    <label>
                        State:
                        <input type="text" name="state" value={formData.state} onChange={handleChange} />
                    </label>
                    <button type="submit">UPDATE</button>
                </form>
                <div className="past-orders">
                    <h2>Past Orders</h2>
                    {orders.length > 0 ? (
                        <ul>
                            {orders.map((order, index) => (
                                <li key={index}>
                                    {order.createdAt} - {order.size} - {order.toppings.join(', ')} ${order.price.toFixed(2)}
                                    
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No past orders available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
