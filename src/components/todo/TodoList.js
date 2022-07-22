import { Link } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import { changeStatus } from '../fetchService/changeStatus'
import { SingleTodo } from './SingleTodo'
import { getTodo } from '../fetchService/getTodo'

export const TodoList = ({ getTodoData }) => {
    let userId = localStorage.getItem('userId');
    let [todoId, setTodoId] = useState();
    let todos = useContext(ToDoContext);
    let [state, setState] = useState();

    useEffect(() => {
        if (userId !== undefined) {
            getTodo(userId, getTodoData);
        }
    }, [userId])

    const dragStart = (id) => {
        setTodoId(id);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnd = (e) => {
        let status = e.target.className;
        if(status === 'start' || status === 'progress' || status === 'complete'){
            changeStatus(todoId, status);
            todos = todos.map(x => x.objectId === todoId ? x.status = status : '');
            setState(todos)
        }
    }

    const rendreTodo = (x) => {
        return (<SingleTodo
            key={x.objectId}
            data={x}
            dragOver={dragOver}
            dragStart={dragStart}
            dragEnd={dragEnd}
        />)
    }

    return (
        <div className='todo-list'>
            <div className='create-todo'><Link to='/create'>Create new Todo</Link></div>
            <div className='todo-list-wrapper'>
                <div className="start" droppable='true' onDragOver={dragOver} onDrop={dragEnd}>
                    <h2>ToDo</h2>
                    <div className="start-wrapper">
                        {todos && todos.filter(x => x.status === 'start').map(rendreTodo)}
                    </div>
                </div>
                <div className="progress" droppable='true' onDragOver={dragOver} onDrop={dragEnd}>
                    <h2>In progress</h2>
                    <div className="progress-wrapper">
                        {todos && todos.filter(x => x.status === 'progress').map(rendreTodo)}
                    </div>
                </div>
                <div className="complete" droppable='true' onDragOver={dragOver} onDrop={dragEnd}>
                    <h2>Complete</h2>
                    <div className="complete-wrapper">
                        {todos && todos.filter(x => x.status === 'complete').map(rendreTodo)}
                    </div>
                </div>
            </div>
        </div>
    )
}