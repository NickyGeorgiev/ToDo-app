import { useRef, useState } from "react"
import { deleteTodo } from "../fetchService/deleteTodo";
import { useNavigate } from "react-router-dom";

export const SingleTodo = ({info}) => {
    let navigate = useNavigate();
    let [isActive, setIsActive] = useState(false)

    let todoId = useRef(info);

    const onChange = () =>{
        setIsActive(!isActive)
    }

    const removeTodo = () => {
        deleteTodo(todoId.current.objectId);
        navigate('/')
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