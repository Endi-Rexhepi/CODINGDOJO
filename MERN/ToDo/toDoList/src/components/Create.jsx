import { v4 as uuid } from 'uuid'
import { useState } from 'react'

const Create = (props) => {
    const { toDo, setToDo } = props
    const [content, setContent] = useState("")

    const createToDo = (e) => {
        e.preventDefault()
        setToDo([...toDo, {
            id: uuid(),
            done: false,
            content: content,
            checked: false 
        }])
        setContent("") 
    }

    return (
        <>
            <form onSubmit={createToDo}>
                <input type="text" placeholder="To Do" value={content} onChange={(e) => setContent(e.target.value)}/>
                <button>Create</button>
            </form>
        </>
    )
}

export default Create;