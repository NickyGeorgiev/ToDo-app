import { useRef, useState } from "react"
import { deleteTodo } from "../fetchService/deleteTodo";
import { useNavigate } from "react-router-dom";

export const SingleTodo = ({ data, dragStart, dragEnter }) => {
    let navigate = useNavigate();
    let [isActive, setIsActive] = useState(false)
    let todoId = useRef(data);
    let [where, setWhere] = useState()

    const onButtonClicked = () => {
        setIsActive(!isActive)
    }

    const removeTodo = () => {
        deleteTodo(todoId.current.objectId);
        navigate('/')
    }

    const start = (e) => {
        e.target.className = 'todo-title dragged';
        dragStart(todoId.current.objectId)
    }

    const enter = (e) => {
        if(e.relatedTarget.draggable && e.relatedTarget !== null){
            setWhere(e.relatedTarget.className, todoId.current.objectId);
            dragEnter(where)
        }
        
        console.log(where);
    }

    return (
        <>
            <button
                draggable="true"
                className="todo-title"
                onClick={onButtonClicked}
                onDragStart={start}
                onDragEnter={enter}
            >
                {data.title}
                {isActive &&
                    <div>
                        <div className="todo-subtitle">{data.subtitle}</div>
                        <div className="todo-description">{data.description}</div>
                    </div>}
            </button>
            {data.status === 'complete' ? <button onClick={removeTodo}> X </button> : ''}
        </>
    )
}