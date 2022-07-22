import { useRef, useState } from "react"
import { deleteTodo } from "../fetchService/deleteTodo";
import { useNavigate } from "react-router-dom";


export const SingleTodo = ({ data, dragStart, dragOver, dragEnd }) => {
    let navigate = useNavigate();
    let [isActive, setIsActive] = useState(false)
    let todoId = useRef(data);

    const onButtonClicked = () => {
        setIsActive(!isActive)
    }

    const removeTodo = () => {
        deleteTodo(todoId.current.objectId);
        navigate('/')
    }

    const start = (e) => {
        // e.target.className = 'todo-title dragged';
        dragStart(todoId.current.objectId);
    }

    const over = (e) => {
        dragOver(e);
    }

    const drop = (e) => {
        // e.target.className = 'todo-title';
        dragEnd(e);
    }

    return (
        <>
            <button
                draggable
                className="todo-title"
                onClick={onButtonClicked}
                onDragStart={start}
                onDragOver={over}
                onDrop={drop}
            > {data.title}
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