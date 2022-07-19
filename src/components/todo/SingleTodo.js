import { useState } from "react"

export const SingleTodo = ({data}) => {

    let [isActive, setIsActive] = useState(false)

    const onChange = () =>{
        setIsActive(!isActive)
    }

    return (
        <button className="todo-title" onClick={onChange}>{data.title}
        {isActive && <div>
            <div className="todo-subtitle">{data.subtitle}</div>
            <div className="todo-description">{data.description}</div>
        </div>}
        </button>
    )
}