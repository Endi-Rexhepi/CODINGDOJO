import { useState } from "react"

 

const Blog=(props) => {
const{firstname, lastname, age, haircolor, button}=props
const [changeAge, setChangeAge] = useState(age)


    return(
        <>
            <div>
                <h1>{lastname}, {firstname}</h1>
                <p>Age: {changeAge}</p>
                <p>hair Color: {haircolor}</p>
                <button onClick={() => setChangeAge(changeAge + 1)}> {button}</button>
            </div>
        
        
        </>

    )
}

export default Blog