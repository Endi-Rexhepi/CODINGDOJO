import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom";

const User = () => {
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const  navigate= useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data.product)
        })
    }, []);
    const handleDelete = () =>axios.delete(`http://localhost:8000/api/products/${id}`)
    .then(res => {
        navigate('/')
    })
    return(
        <div>
            <h1 className="text-center">Single product information</h1>
            <h5>{product.title}</h5>
            <p>{product.price}$</p>
            <p>{product.description}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default User;