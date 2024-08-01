import { useState } from "react";

const Person = (props) => {
    const { firstname, lastname, age, haircolor } = props;
    const [updatedAge, setUpdatedAge] = useState(age);
    
    return (
        <div>
            <h1>{lastname}, {firstname}</h1>
            <p>Age: {updatedAge}</p> 
            <p>Hair Color: {haircolor}</p>
            <button onClick={() => setUpdatedAge(updatedAge + 1)}>
                Birthday button for {firstname} {lastname}
            </button>
        </div>
    );
};

export default Person;