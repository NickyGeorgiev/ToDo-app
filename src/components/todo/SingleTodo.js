import { useState } from "react"

export const SingleTodo = ({info}) => {

    let [isActive, setIsActive] = useState(false)

    const onChange = () =>{
        setIsActive(!isActive)
    }

    return (
        <button className="todo-title" onClick={onChange}>{info.title}
        {isActive && <div>
            <div className="todo-subtitle">{info.subtitle}</div>
            <div className="todo-description">{info.description}</div>
        </div>}
        </button>
    )
}