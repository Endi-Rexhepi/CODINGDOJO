// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => (
//     <div className="container">
//         <header>
//             <h1>Pizza Pete's</h1>
//             <nav>
//                 <Link to="/home">HOME</Link>
//                 <Link to="/order">ORDER (0)</Link>
//                 <Link to="/account">ACCOUNT</Link>
//                 <Link to="/logout">LOGOUT</Link>
//             </nav>
//         </header>
//         <div className="quick-options">
//             <Link to="/craft-pizza" className="option">NEW ORDER</Link>
//             <Link to="/reorder" className="option">RE-ORDER MY FAVE</Link>
//             <Link to="/surprise" className="option">SURPRISE ME</Link>
//         </div>
//     </div>
// );

// export default Home;

// src/components/Header.jsx
// src/components/Home.jsx

// src/components/Home.jsx
// src/components/Home.jsx

// src/components/Home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const Home = () => {
    const [favoritePizza, setFavoritePizza] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/favoritePizza')
            .then(response => setFavoritePizza(response.data))
            .catch(error => console.error(error));
    }, []);

    const orderFavoritePizza = () => {
        if (favoritePizza) {
            axios.post('http://localhost:8000/api/orders/create', favoritePizza)
                .then(response => console.log('Favorite pizza ordered:', response.data))
                .catch(error => console.error(error));
        }
    };

    const surpriseMe = () => {
        axios.get('http://localhost:8000/api/orders/surpriseMe')
            .then(response => console.log('Surprise pizza ordered:', response.data))
            .catch(error => console.error(error));
    };

    return (
        <div className="container">
            <Header/>
            <div className="quick-options">
                <Link to="/craft-pizza" className="option">NEW ORDER</Link>
                <button onClick={orderFavoritePizza} className="option">RE-ORDER MY FAVE</button>
                <button onClick={surpriseMe} className="option">SURPRISE ME</button>
            </div>
        </div>
    );
};

export default Home;
