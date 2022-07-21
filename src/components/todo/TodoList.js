import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import { changeStatus } from '../fetchService/changeStatus'
import { SingleTodo } from './SingleTodo'

export const TodoList = () => {
    let [todoId, setTodoId] = useState();
    let todos = useContext(ToDoContext);

    const dragStart = (id) => {
        setTodoId(id);
    }

    const dragEnter = (section) => {
        // changeStatus(todoId, section);
    }

    const rendreTodo = (x) => {
        return (<SingleTodo
            key={x.objectId}
            data={x}
            dragStart={dragStart}
            dragEnter={dragEnter}
        />)
    }

    return (
        <div className='todo-list'>
            <div><Link to='/create'>Create new Todo</Link></div>
            <div className='todo-list-wrapper'>
                <div className="section-start">
                    <h2>ToDo</h2>
                    <div className="start" draggable="true">
                        {todos ? todos.filter(x => x.status === 'start').map(rendreTodo) : ''}
                    </div>
                </div>
                <div className="section-in-progress">
                    <h2>In progress</h2>
                    <div className="progress" draggable="true">
                        {todos ? todos.filter(x => x.status === 'progress').map(rendreTodo) : ''}
                    </div>
                </div>
                <div className="section-complete">
                    <h2>Complete</h2>
                    <div className="complete" draggable="true">
                        {todos ? todos.filter(x => x.status === 'complete').map(rendreTodo) : ''}
                    </div>
                </div>
            </div>
        </div>
    )
}