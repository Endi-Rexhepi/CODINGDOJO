// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useOrders } from '../Contexts/OrderContext';

// const CraftPizza = () => {
//     const [method, setMethod] = useState('CarryOut');
//     const [size, setSize] = useState('Large');
//     const [crust, setCrust] = useState('Thin Crust');
//     const [toppings, setToppings] = useState([]);
//     const [quantity, setQuantity] = useState(1);
//     const { orders, addOrder } = useOrders();

//     const handleToppingChange = (e) => {
//         const { value, checked } = e.target;
//         if (checked) {
//             setToppings([...toppings, value]);
//         } else {
//             setToppings(toppings.filter(topping => topping !== value));
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const order = { method, size, crust, toppings, quantity, price: 12.99 * quantity, favorite: false };
//         addOrder(order);
//         // Optionally, you can also make a POST request to save the order in the backend
//         axios.post('http://localhost:8000/api/orders', order)
//             .then(response => console.log(response.data))
//             .catch(error => console.error(error));
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
//             <div className="craft-pizza">
//                 <h2>CRAFT-A-PIZZA</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label>
//                         METHOD:
//                         <div>
//                             <label>
//                                 <input type="radio" value="CarryOut" checked={method === 'CarryOut'} onChange={(e) => setMethod(e.target.value)} />
//                                 CarryOut
//                             </label>
//                             <label>
//                                 <input type="radio" value="DineIn" checked={method === 'DineIn'} onChange={(e) => setMethod(e.target.value)} />
//                                 DineIn
//                             </label>
//                         </div>
//                     </label>
//                     <label>
//                         SIZE:
//                         <div>
//                             <label>
//                                 <input type="radio" value="Small" checked={size === 'Small'} onChange={(e) => setSize(e.target.value)} />
//                                 Small
//                             </label>
//                             <label>
//                                 <input type="radio" value="Medium" checked={size === 'Medium'} onChange={(e) => setSize(e.target.value)} />
//                                 Medium
//                             </label>
//                             <label>
//                                 <input type="radio" value="Large" checked={size === 'Large'} onChange={(e) => setSize(e.target.value)} />
//                                 Large
//                             </label>
//                         </div>
//                     </label>
//                     <label>
//                         QUANTITY:
//                         <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
//                     </label>
//                     <label>
//                         CRUST:
//                         <div>
//                             <label>
//                                 <input type="radio" value="Thin Crust" checked={crust === 'Thin Crust'} onChange={(e) => setCrust(e.target.value)} />
//                                 Thin Crust
//                             </label>
//                             <label>
//                                 <input type="radio" value="Thick Crust" checked={crust === 'Thick Crust'} onChange={(e) => setCrust(e.target.value)} />
//                                 Thick Crust
//                             </label>
//                         </div>
//                     </label>
//                     <label>
//                         TOPPINGS:
//                         <div>
//                             <label>
//                                 <input type="checkbox" value="Pepperoni" onChange={handleToppingChange} /> Pepperoni
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Onion" onChange={handleToppingChange} /> Onion
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Pineapple" onChange={handleToppingChange} /> Pineapple
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Sausage" onChange={handleToppingChange} /> Sausage
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Bacon" onChange={handleToppingChange} /> Bacon
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Mushrooms" onChange={handleToppingChange} /> Mushrooms
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Olives" onChange={handleToppingChange} /> Olives
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Green Peppers" onChange={handleToppingChange} /> Green Peppers
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Tomatoes" onChange={handleToppingChange} /> Tomatoes
//                             </label>
//                             <label>
//                                 <input type="checkbox" value="Extra Cheese" onChange={handleToppingChange} /> Extra Cheese
//                             </label>
//                         </div>
//                     </label>
//                     <button type="submit">ADD TO ORDER</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default CraftPizza;

// src/components/CraftPizza.jsx
// src/components/CraftPizza.jsx

// src/components/CraftPizza.jsx

// src/components/CraftPizza.jsx
import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const CraftPizza = () => {
    const [method, setMethod] = useState('CarryOut');
    const [size, setSize] = useState('Large');
    const [crust, setCrust] = useState('Thin Crust');
    const [toppings, setToppings] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const handleToppingChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setToppings([...toppings, value]);
        } else {
            setToppings(toppings.filter(topping => topping !== value));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const order = { method, size, crust, toppings, quantity, price: 12.99 * quantity, favorite: false };
        axios.post('http://localhost:8000/api/orders/create', order)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    const handleSetFavorite = (e) => {
        e.preventDefault();
        const pizza = { method, size, crust, toppings, quantity, price: 12.99 * quantity };
        axios.post('http://localhost:8000/api/favoritePizza', { pizzaDetails: pizza })
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <Header />
            <div className="craft-pizza">
                <h2>CRAFT-A-PIZZA</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        METHOD:
                        <div>
                            <label>
                                <input type="radio" value="CarryOut" checked={method === 'CarryOut'} onChange={(e) => setMethod(e.target.value)} />
                                CarryOut
                            </label>
                            <label>
                                <input type="radio" value="DineIn" checked={method === 'DineIn'} onChange={(e) => setMethod(e.target.value)} />
                                DineIn
                            </label>
                        </div>
                    </label>
                    <label>
                        SIZE:
                        <div>
                            <label>
                                <input type="radio" value="Small" checked={size === 'Small'} onChange={(e) => setSize(e.target.value)} />
                                Small
                            </label>
                            <label>
                                <input type="radio" value="Medium" checked={size === 'Medium'} onChange={(e) => setSize(e.target.value)} />
                                Medium
                            </label>
                            <label>
                                <input type="radio" value="Large" checked={size === 'Large'} onChange={(e) => setSize(e.target.value)} />
                                Large
                            </label>
                        </div>
                    </label>
                    <label>
                        QUANTITY:
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" />
                    </label>
                    <label>
                        CRUST:
                        <div>
                            <label>
                                <input type="radio" value="Thin Crust" checked={crust === 'Thin Crust'} onChange={(e) => setCrust(e.target.value)} />
                                Thin Crust
                            </label>
                            <label>
                                <input type="radio" value="Thick Crust" checked={crust === 'Thick Crust'} onChange={(e) => setCrust(e.target.value)} />
                                Thick Crust
                            </label>
                        </div>
                    </label>
                    <label>
                        TOPPINGS:
                        <div>
                            <label>
                                <input type="checkbox" value="Pepperoni" onChange={handleToppingChange} /> Pepperoni
                            </label>
                            <label>
                                <input type="checkbox" value="Onion" onChange={handleToppingChange} /> Onion
                            </label>
                            <label>
                                <input type="checkbox" value="Pineapple" onChange={handleToppingChange} /> Pineapple
                            </label>
                            <label>
                                <input type="checkbox" value="Sausage" onChange={handleToppingChange} /> Sausage
                            </label>
                            <label>
                                <input type="checkbox" value="Bacon" onChange={handleToppingChange} /> Bacon
                            </label>
                            <label>
                                <input type="checkbox" value="Mushrooms" onChange={handleToppingChange} /> Mushrooms
                            </label>
                            <label>
                                <input type="checkbox" value="Olives" onChange={handleToppingChange} /> Olives
                            </label>
                            <label>
                                <input type="checkbox" value="Green Peppers" onChange={handleToppingChange} /> Green Peppers
                            </label>
                            <label>
                                <input type="checkbox" value="Tomatoes" onChange={handleToppingChange} /> Tomatoes
                            </label>
                            <label>
                                <input type="checkbox" value="Extra Cheese" onChange={handleToppingChange} /> Extra Cheese
                            </label>
                        </div>
                    </label>
                    <button type="submit">ADD TO ORDER</button>
                    <button onClick={handleSetFavorite}>SET AS FAVORITE</button>
                </form>
            </div>
        </div>
    );
};

export default CraftPizza;
