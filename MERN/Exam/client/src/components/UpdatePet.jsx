import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const UpdatePet = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [pet, setPet] = useState({
        pet_Name: '',
        pet_Type: '',
        pet_Description: '',
        skill1: '',
        skill2: '',
        skill3: ''
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                const { pet_Name, pet_Type, pet_Description, skill1, skill2, skill3 } = res.data.pet;
                setPet({
                    pet_Name: pet_Name || '',
                    pet_Type: pet_Type || '',
                    pet_Description: pet_Description || '',
                    skill1: skill1 || '',
                    skill2: skill2 || '',
                    skill3: skill3 || ''
                });
            })
            .catch(err => {
                console.error('Error fetching pet:', err);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPet(prevState => ({
            ...prevState,
            [name]: value
        }));

        let newErrors = { ...errors };
        if (name === 'pet_Name' && value.length < 3) {
            newErrors.pet_Name = 'Pet Name must be at least 3 characters long';
        } else if (name === 'pet_Name' && value.length >= 3) {
            delete newErrors.pet_Name;
        }

        if (name === 'pet_Type' && value.length < 3) {
            newErrors.pet_Type = 'Pet Type must be at least 3 characters long';
        } else if (name === 'pet_Type' && value.length >= 3) {
            delete newErrors.pet_Type;
        }

        if (name === 'pet_Description' && value.length < 3) {
            newErrors.pet_Description = 'Pet Description must be at least 3 characters long';
        } else if (name === 'pet_Description' && value.length >= 3) {
            delete newErrors.pet_Description;
        }

        setErrors(newErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};
        if (pet.pet_Name.length < 3) {
            newErrors.pet_Name = 'Pet Name must be at least 3 characters long';
        }
        if (pet.pet_Type.length < 3) {
            newErrors.pet_Type = 'Pet Type must be at least 3 characters long';
        }
        if (pet.pet_Description.length < 3) {
            newErrors.pet_Description = 'Pet Description must be at least 3 characters long';
        }

        const skills = [pet.skill1, pet.skill2, pet.skill3].filter(skill => skill.trim() !== '');
        if (skills.length > 3) {
            newErrors.skills = 'A pet may have up to 3 skills';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        axios.patch(`http://localhost:8000/api/pets/${id}`, pet)
            .then(res => {
                navigate(`/pets/${id}`);
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.error) {
                    setErrors({ global: err.response.data.error });
                } else {
                    setErrors({ global: 'Failed to update pet. Please check your input and try again.' });
                }
            });
    };

    const { pet_Name, pet_Type, pet_Description, skill1, skill2, skill3 } = pet;

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Pet Shelter</h1>
                <Link to={`/`} className="ms-5">Back to home</Link>
            </div>
            <h2 className="text-center">Edit {pet_Name}</h2>
            {errors.global && <p className="text-danger text-center">{errors.global}</p>}
            <form className="w-75 m-auto" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="pet_Name">Pet Name:</label>
                    <input type="text" className="form-control" id="pet_Name" name="pet_Name" value={pet_Name} onChange={handleChange} />
                    {errors.pet_Name && <p className="text-danger">{errors.pet_Name}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pet_Type">Pet Type:</label>
                    <input type="text" className="form-control" id="pet_Type" name="pet_Type" value={pet_Type} onChange={handleChange} />
                    {errors.pet_Type && <p className="text-danger">{errors.pet_Type}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pet_Description">Pet Description:</label>
                    <input type="text" className="form-control" id="pet_Description" name="pet_Description" value={pet_Description} onChange={handleChange} />
                    {errors.pet_Description && <p className="text-danger">{errors.pet_Description}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="skill1">Skill 1:</label>
                    <input type="text" className="form-control" id="skill1" name="skill1" value={skill1} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="skill2">Skill 2:</label>
                    <input type="text" className="form-control" id="skill2" name="skill2" value={skill2} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="skill3">Skill 3:</label>
                    <input type="text" className="form-control" id="skill3" name="skill3" value={skill3} onChange={handleChange} />
                </div>
                {errors.skills && <p className="text-danger">{errors.skills}</p>}
                <button type="submit" className="btn btn-success">Edit Pet</button>
            </form>
        </div>
    );
};

export default UpdatePet;


