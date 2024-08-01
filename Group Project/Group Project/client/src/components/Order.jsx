// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useOrders } from '../Contexts/OrderContext';

// const Order = () => {
//     const { orders, editOrder, deleteOrder } = useOrders();
//     const [isEditing, setIsEditing] = useState(false);
//     const [currentOrder, setCurrentOrder] = useState(null);
//     const [currentIndex, setCurrentIndex] = useState(null);

//     const handleEdit = (index) => {
//         setCurrentOrder(orders[index]);
//         setCurrentIndex(index);
//         setIsEditing(true);
//     };

//     const handleDelete = (index) => {
//         deleteOrder(index);
//     };

//     const handleSave = () => {
//         editOrder(currentIndex, currentOrder);
//         setIsEditing(false);
//     };

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
//             <div className="order">
//                 <h2>YOUR ORDER</h2>
//                 {orders.map((order, index) => (
//                     <div key={index} className="order-item">
//                         <p>METHOD: {order.method}</p>
//                         <p>Size: {order.size}</p>
//                         <p>Qty: {order.quantity}</p>
//                         <p>Crust: {order.crust}</p>
//                         <p>Toppings: {order.toppings.join(', ')}</p>
//                         <p>Price: ${order.price.toFixed(2)}</p>
//                         <button onClick={() => handleEdit(index)}>EDIT</button>
//                         <button onClick={() => handleDelete(index)}>DELETE</button>
//                     </div>
//                 ))}
//                 {isEditing && (
//                     <div className="edit-order">
//                         <h3>Edit Order</h3>
//                         <label>
//                             METHOD:
//                             <div>
//                                 <label>
//                                     <input type="radio" value="CarryOut" checked={currentOrder.method === 'CarryOut'} onChange={(e) => setCurrentOrder({ ...currentOrder, method: e.target.value })} />
//                                     CarryOut
//                                 </label>
//                                 <label>
//                                     <input type="radio" value="DineIn" checked={currentOrder.method === 'DineIn'} onChange={(e) => setCurrentOrder({ ...currentOrder, method: e.target.value })} />
//                                     DineIn
//                                 </label>
//                             </div>
//                         </label>
//                         <label>
//                             SIZE:
//                             <div>
//                                 <label>
//                                     <input type="radio" value="Small" checked={currentOrder.size === 'Small'} onChange={(e) => setCurrentOrder({ ...currentOrder, size: e.target.value })} />
//                                     Small
//                                 </label>
//                                 <label>
//                                     <input type="radio" value="Medium" checked={currentOrder.size === 'Medium'} onChange={(e) => setCurrentOrder({ ...currentOrder, size: e.target.value })} />
//                                     Medium
//                                 </label>
//                                 <label>
//                                     <input type="radio" value="Large" checked={currentOrder.size === 'Large'} onChange={(e) => setCurrentOrder({ ...currentOrder, size: e.target.value })} />
//                                     Large
//                                 </label>
//                             </div>
//                         </label>
//                         <label>
//                             QUANTITY:
//                             <input type="number" value={currentOrder.quantity} onChange={(e) => setCurrentOrder({ ...currentOrder, quantity: e.target.value })} min="1" />
//                         </label>
//                         <label>
//                             CRUST:
//                             <div>
//                                 <label>
//                                     <input type="radio" value="Thin Crust" checked={currentOrder.crust === 'Thin Crust'} onChange={(e) => setCurrentOrder({ ...currentOrder, crust: e.target.value })} />
//                                     Thin Crust
//                                 </label>
//                                 <label>
//                                     <input type="radio" value="Thick Crust" checked={currentOrder.crust === 'Thick Crust'} onChange={(e) => setCurrentOrder({ ...currentOrder, crust: e.target.value })} />
//                                     Thick Crust
//                                 </label>
//                             </div>
//                         </label>
//                         <label>
//                             TOPPINGS:
//                             <div>
//                                 {['Pepperoni', 'Onion', 'Pineapple', 'Sausage', 'Bacon', 'Mushrooms', 'Olives', 'Green Peppers', 'Tomatoes', 'Extra Cheese'].map(topping => (
//                                     <label key={topping}>
//                                         <input type="checkbox" value={topping} checked={currentOrder.toppings.includes(topping)} onChange={(e) => {
//                                             if (e.target.checked) {
//                                                 setCurrentOrder({ ...currentOrder, toppings: [...currentOrder.toppings, e.target.value] });
//                                             } else {
//                                                 setCurrentOrder({ ...currentOrder, toppings: currentOrder.toppings.filter(t => t !== e.target.value) });
//                                             }
//                                         }} />
//                                         {topping}
//                                     </label>
//                                 ))}
//                             </div>
//                         </label>
//                         <button onClick={handleSave}>SAVE</button>
//                     </div>
//                 )}
//                 {orders.length === 0 && <p>No orders yet</p>}
//             </div>
//         </div>
//     );
// };

// export default Order;
// src/components/Order.jsx

// src/components/Order.jsx
// src/components/Order.jsx
// src/components/Order.jsx

// src/components/Order.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header'; // Assuming there's a Header component

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const methods = ['CarryOut', 'DineIn'];
    const sizes = ['Small', 'Medium', 'Large'];
    const crusts = ['Thin Crust', 'Thick Crust'];
    const toppingsOptions = [
        'Pepperoni', 'Onion', 'Pineapple', 'Sausage', 'Bacon',
        'Mushrooms', 'Olives', 'Green Peppers', 'Tomatoes', 'Extra Cheese'
    ];
    const pricePerPizza = 12.99;

    useEffect(() => {
        axios.get('http://localhost:8000/api/orders')
            .then(response => setOrders(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleEdit = (index) => {
        setCurrentOrder({ ...orders[index] });
        setCurrentIndex(index);
        setIsEditing(true);
    };

    const handleDelete = (index) => {
        const orderId = orders[index]._id;
        axios.delete(`http://localhost:8000/api/orders/${orderId}`)
            .then(() => {
                setOrders(orders.filter((_, i) => i !== index));
            })
            .catch(error => console.error(error));
    };

    const handleSave = () => {
        const updatedOrder = {
            ...currentOrder,
            price: currentOrder.quantity * pricePerPizza
        };
        axios.put(`http://localhost:8000/api/orders/${currentOrder._id}`, updatedOrder)
            .then(response => {
                const updatedOrders = [...orders];
                updatedOrders[currentIndex] = response.data;
                setOrders(updatedOrders);
                setIsEditing(false);
                setCurrentOrder(null);
                setCurrentIndex(null);
            })
            .catch(error => console.error(error));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentOrder({
            ...currentOrder,
            [name]: value,
            price: name === 'quantity' ? value * pricePerPizza : currentOrder.price
        });
    };

    const handleToppingChange = (e) => {
        const { value, checked } = e.target;
        const updatedToppings = checked
            ? [...currentOrder.toppings, value]
            : currentOrder.toppings.filter(topping => topping !== value);

        setCurrentOrder({
            ...currentOrder,
            toppings: updatedToppings,
        });
    };

    return (
        <div className="container">
            <Header />
            <div className="order">
                <h2>YOUR ORDER</h2>
                {orders.map((order, index) => (
                    <div key={index} className="order-item">
                        <div className='border1'>
                            <p>METHOD: {order.method}</p>
                            <p>Size: {order.size}</p>
                            <p>Qty: {order.quantity}</p>
                            <p>Crust: {order.crust}</p>
                            <p>Toppings: {order.toppings.join(', ')}</p>
                            <p>Price: ${order.price.toFixed(2)}</p>
                            <button onClick={() => handleEdit(index)}>EDIT</button>
                            <button onClick={() => handleDelete(index)}>DELETE</button>
                        </div>
                        {isEditing && currentIndex === index && (
                            <div className="edit-order">
                                <h3>Edit Order</h3>
                                <form>
                                    <label>
                                        Method:
                                        <select name="method" value={currentOrder.method} onChange={handleChange}>
                                            {methods.map(method => (
                                                <option key={method} value={method}>{method}</option>
                                            ))}
                                        </select>
                                    </label>
                                    <label>
                                        Size:
                                        <select name="size" value={currentOrder.size} onChange={handleChange}>
                                            {sizes.map(size => (
                                                <option key={size} value={size}>{size}</option>
                                            ))}
                                        </select>
                                    </label>
                                    <label>
                                        Quantity:
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={currentOrder.quantity}
                                            onChange={handleChange}
                                        />
                                    </label>
                                    <label>
                                        Crust:
                                        <select name="crust" value={currentOrder.crust} onChange={handleChange}>
                                            {crusts.map(crust => (
                                                <option key={crust} value={crust}>{crust}</option>
                                            ))}
                                        </select>
                                    </label>
                                    <label>
                                        Toppings:
                                        <div>
                                            {toppingsOptions.map(topping => (
                                                <label key={topping}>
                                                    <input
                                                        type="checkbox"
                                                        value={topping}
                                                        checked={currentOrder.toppings.includes(topping)}
                                                        onChange={handleToppingChange}
                                                    /> {topping}
                                                </label>
                                            ))}
                                        </div>
                                    </label>
                                    <button type="button" onClick={handleSave}>SAVE</button>
                                </form>
                            </div>
                        )}
                    </div>
                ))}
                {orders.length === 0 && <p>No orders yet</p>}
            </div>
        </div>
    );
};

export default Order;
