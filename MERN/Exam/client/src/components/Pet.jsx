import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom"; 

const Pet = () => {
    const [pet, setPet] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setPet(res.data.pet);
            })
            .catch(err => {
                console.error('Error fetching pet:', err);
            });
    }, [id]);

    const handleDelete = () => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                navigate('/'); 
            })
            .catch(err => {
                console.error('Error deleting pet:', err);
            });
    };

    const handleLikeClick = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        }
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Pet Shelter</h1>
                <Link to={`/`}>Back to home</Link>
            </div>
            <div className="border p-3 mb-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-center">Details about: {pet.pet_Name}</h2>
                    <button onClick={handleDelete} className="btn btn-danger ms-5">Adopt {pet.pet_Name}</button>
                </div>
                <p>Pet type: {pet.pet_Type}</p>
                <p>Description: {pet.pet_Description}</p>
                <div className="mb-3 d-flex">
                    <p>Skills:</p>
                    <div>
                        {pet.skill1 && <p>{pet.skill1}</p>}
                        {pet.skill2 && <p>{pet.skill2}</p>}
                        {pet.skill3 && <p>{pet.skill3}</p>}
                    </div>
                </div>
                <div className="d-flex justify-content-around align-items-center mb-4">
                    <button onClick={handleLikeClick} className="btn btn-success"> Like {pet.pet_Name}</button>
                    <p>{likes} like(s)</p>
                </div>
            </div>
        </div>
    );
}

export default Pet;
