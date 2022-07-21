import { useRef, useState } from "react"
import { deleteTodo } from "../fetchService/deleteTodo";
import { useNavigate } from "react-router-dom";

export const SingleTodo = ({ info, dragStart, dragEnter }) => {
    let navigate = useNavigate();
    let [isActive, setIsActive] = useState(false)
    let todoId = useRef(info);

    const onChange = () => {
        setIsActive(!isActive)
    }

    const removeTodo = () => {
        deleteTodo(todoId.current.objectId);
        navigate('/')
    }

    const start = () => {
        dragStart(todoId.current.objectId)
    }

    const enter = (e) => {

        console.log(e);

        // dragEnd(target)
        // console.log(e.relatedTarget.className);
    }

    return (
        <>
            <button
                draggable="true"
                className="todo-title"
                onClick={onChange}
                onDragStart={start}
                onDragEnter={enter}
            >
                {info.title}
                {isActive &&
                    <div>
                        <div className="todo-subtitle">{info.subtitle}</div>
                        <div className="todo-description">{info.description}</div>
                    </div>}
            </button>
            {info.status === 'complete' ? <button onClick={removeTodo}> X </button> : ''}
        </>

    )
}