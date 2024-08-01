
import { useState } from "react";    

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");   
    const [firstNameError, setFirstNameError] = useState(""); 

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState(""); 

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState(""); 

    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [confirmPasswordError, setConfirmPasswordError] = useState(""); 

    
    const createUser = (e) => {

        e.preventDefault();
        
        const newUser = { firstName, lastName ,email, password, confirmPassword };
        
    	setFirstName("");
        setLastName("");
    	setEmail("");
    	setPassword("");
        setConfirmPassword("");
    };

    const handleFirstName = (e) => {
        setFirstName(e);
        if ( e.length === 0) {
            setFirstNameError("")
        } else if(e.length < 2) {
            setFirstNameError("First Name must be at least 2 characters!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e);
        if (e.length === 0){
            setLastNameError("")
        } else if(e.length < 2) {
            setLastNameError("Last Name must be at least 2 characters!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e);
    
        if (e.length === 0) {
            setEmailError("");
        } else if (e.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("");
        }
    };

    const handlePassword = (e) => {
        setPassword(e);

        if (e.length === 0){
            setPasswordError("")
        } else if(e.length < 8) {
            setPasswordError("Password must be at least 8 characters!");
        } else {
            setPasswordError("");
        }
    }

    
    const checkPasswords = (e) => {
        setConfirmPassword(e);

        if (e != password) {
            setConfirmPasswordError('Passwords must match');
        } else {
            setConfirmPasswordError('');
        }
      };

    
    return(
        <>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => handleFirstName(e.target.value)} />
                    <p>{ firstNameError }</p>
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => handleLastName(e.target.value) } />
                    <p> {lastNameError} </p>
                </div>
                <div>
                    <label>Email: </label> 
                    <input type="text" value={email} onChange={ (e) => handleEmail(e.target.value) } />
                    <p> {emailError} </p>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => handlePassword(e.target.value) } />
                    <p>{passwordError}</p>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={confirmPassword} onChange={ (e) => checkPasswords(e.target.value) } />
                    <p>{confirmPasswordError}</p>
                </div>
                <input type="submit" value="Create User" />
            </form>
            <p>Your Form Data</p>
            <p>First Name:  {firstName}</p>
            <p>Last Name:  {lastName}</p>
            <p>Email:  {email}</p>
            <p>Password:  {password}</p>
            <p>Confirm Password:  {confirmPassword}</p>
        </>
    );
};
    
export default UserForm;
