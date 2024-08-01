

const Person = (props) => {
    const {firstname, lastname, age, haircolor} = props
    
    return(
        <>
        <div>
            <h1>{lastname}, {firstname}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {haircolor}</p>
        </div>
        </>
    )

}
export default Person