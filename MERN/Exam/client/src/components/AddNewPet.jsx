import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; 
import axios from 'axios';

const AddNewPet = () => {
    const [pet_Name, setPet_Name] = useState('');
    const [pet_Type, setPet_Type] = useState('');
    const [pet_Description, setPet_Description] = useState('');
    const [skill1, setSkill1] = useState('');
    const [skill2, setSkill2] = useState('');
    const [skill3, setSkill3] = useState('');
    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    
    const validate = (name, value) => {
        let validationErrors = { ...errors };
        if (name === 'pet_Name' && value.length < 3) {
            validationErrors.pet_Name = 'Pet Name must be at least 3 characters long';
        } else if (name === 'pet_Name') {
            delete validationErrors.pet_Name;
        }
        if (name === 'pet_Type' && value.length < 3) {
            validationErrors.pet_Type = 'Pet Type must be at least 3 characters long';
        } else if (name === 'pet_Type') {
            delete validationErrors.pet_Type;
        }
        if (name === 'pet_Description' && value.length < 3) {
            validationErrors.pet_Description = 'Pet Description must be at least 3 characters long';
        } else if (name === 'pet_Description') {
            delete validationErrors.pet_Description;
        }

        setErrors(validationErrors);
    };

    const handleChange = (e, setter) => {
        const { name, value } = e.target;
        setter(value);
        validate(name, value);
    };

    const handlePetCreation = (e) => {
        e.preventDefault();
        const newPet = {
            pet_Name,
            pet_Type,
            pet_Description,
            skill1,
            skill2,
            skill3
        };
        

        axios.post(`http://localhost:8000/api/pets`, newPet)
            .then(res => {
                navigate('/');
            })
            .catch(err => {
                if (err.response && err.response.data && err.response.data.error) {
                    setErrors({ global: err.response.data.error });
                } else {
                    setErrors({ global: 'Failed to add pet. Please check your input and try again.' });
                }
            });
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Pet Shelter</h1>
                <Link to={`/`}>Back to home</Link>
            </div>
            <h2 className="text-center">Know a pet needing a home?</h2>
            {errors.global && <p className="text-danger text-center">{errors.global}</p>}
            <form className="w-50 m-auto" onSubmit={handlePetCreation}>
                <div className="mb-3">
                    <label htmlFor="pet_Name">Pet Name:</label>
                    <input type="text" className="form-control" name="pet_Name" value={pet_Name} onChange={(e) => handleChange(e, setPet_Name)} />
                    {errors.pet_Name && <p className="text-danger">{errors.pet_Name}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pet_Type">Pet Type:</label>
                    <input type="text" className="form-control" name="pet_Type" value={pet_Type} onChange={(e) => handleChange(e, setPet_Type)} />
                    {errors.pet_Type && <p className="text-danger">{errors.pet_Type}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="pet_Description">Pet Description:</label>
                    <input type="text" className="form-control" name="pet_Description" value={pet_Description} onChange={(e) => handleChange(e, setPet_Description)} />
                    {errors.pet_Description && <p className="text-danger">{errors.pet_Description}</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="skill1">Skill 1:</label>
                    <input type="text" className="form-control" name="skill1" value={skill1} onChange={(e) => handleChange(e, setSkill1)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="skill2">Skill 2:</label>
                    <input type="text" className="form-control" name="skill2" value={skill2} onChange={(e) => handleChange(e, setSkill2)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="skill3">Skill 3:</label>
                    <input type="text" className="form-control" name="skill3" value={skill3} onChange={(e) => handleChange(e, setSkill3)} />
                </div>
                {errors.skills && <p className="text-danger">{errors.skills}</p>}
                <button className="btn btn-success">Add Pet</button>
            </form>
        </div>
    );
};

export default AddNewPet;
