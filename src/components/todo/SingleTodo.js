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
            <button className="todo-title"
                draggable
                onClick={onButtonClicked}
                onDragStart={start}
                onDragOver={over}
                onDrop={drop}
            > {data.title}
                {isActive &&
                    <div className="summary">
                        <div className="todo-subtitle">{data.subtitle}</div>
                        <div className="todo-description">{data.description}</div>
                    </div>}
            </button>
            {data.status === 'complete' ? <button className='delete' onClick={removeTodo}> X </button> : ''}
        </>
    )
}