import { useState } from 'react'

const Display = (props) => {
    const { toDo, setToDo } = props

    const handleCheckboxChange = (id) => {
        const updatedToDo = toDo.map(task =>
            task.id === id ? { ...task, checked: !task.checked } : task
        )
        setToDo(updatedToDo)
    }

    const deleteTask = () => {
        setToDo(toDo.filter(task => !task.checked))
    }

    return (
        <>
            {toDo.map((item, index) => (
                <div key={index}>
                    <label>{item.content}</label>
                    <input type="checkbox" checked={item.checked || false} onChange={() => handleCheckboxChange(item.id)}/>
                </div>
            ))}
            <button onClick={deleteTask}>Delete</button>
        </>
    )
}

export default Display;