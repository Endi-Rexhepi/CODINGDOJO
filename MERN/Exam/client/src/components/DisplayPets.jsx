import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DisplayPets = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets`)
            .then(res => {
                const sortPetsByType = res.data.pets.sort((a, b) => (a.pet_Type > b.pet_Type) ? 1 : -1);
                setPets(sortPetsByType);
            })
            .catch(err => {
                console.error('Error fetching pets:', err);
            });
    }, []);

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1 className="text-center">Pet Shelter</h1>
                <Link to={`/pets/addnewpet`} > Add a pet to the shelter </Link>
            </div>                
            <h2>These pets are looking for a good home</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {pets.map((pet, index) => (
                        <tr key={index}>
                            <td>{pet.pet_Name}</td>
                            <td>{pet.pet_Type}</td>
                            <td className="d-flex justify-content-evenly">
                                <Link to={`/pets/${pet._id}`} > Details </Link>
                                <p> | </p>
                                <Link to={`/pets/edit/${pet._id}`} > Edit </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayPets;


