import { useRef, useState } from "react"
import { deleteTodo } from "../fetchService/deleteTodo";

export const SingleTodo = ({info}) => {

    let [isActive, setIsActive] = useState(false)

    let todoBtn = useRef(info);

    const onChange = () =>{
        setIsActive(!isActive)
    }

    const removeTodo = (e) => {
        deleteTodo(todoBtn.current)
    }

    return (
        <>
        <button className="todo-title" onClick={onChange} >{info.title}
        {isActive && <div>
            <div className="todo-subtitle">{info.subtitle}</div>
            <div className="todo-description">{info.description}</div>
        </div>}
        </button>
        {info.status === 'complete' ? <button onClick={removeTodo}> X </button> : ''}
        </>
        
    )
}