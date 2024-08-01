import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios'

const DisplayProducts = () => {
    const[products, setProducts] = useState([])

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products`)
        .then(res => {
            setProducts(res.data.products)
        })
    }, []);

    return(
        <div>
            <h1 className="text-center">All products below:</h1>        
            <div>
            {
                products.map((product , index)=> (
                    <div key={index}>
                        <Link to={`/products/${product._id}`}>{product.title} - See more details about this product</Link>

                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default DisplayProducts;