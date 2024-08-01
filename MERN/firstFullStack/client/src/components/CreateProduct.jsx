import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const CreateProduct = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setError] = useState('')
    const navigate = useNavigate()


    const handleProductCreation = (e) =>{
        e.preventDefault();
        const newProduct ={
            title,
            price,
            description
        }
        axios.post(`http://localhost:8000/api/products`, newProduct)
            .then(res => {
                navigate('/')
        })
        .catch(function (error) {
            setError('Please enter the correct information, else you are not going anywhere!')
          });

    }
    return(
        <div>
            <h1 className="text-center">Create new product</h1>
            { errors && <p className="text-danger text-center">{errors}</p>}
            <form className="w-50 m-auto" onSubmit={handleProductCreation}>
                <div className="mb-3">
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="price">Price:</label>
                    <input type="text" className="form-control" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="form-control" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                </div>
                <button className="btn btn-success">Create Button</button>
            </form>
        </div>
    )
}

export default CreateProduct;