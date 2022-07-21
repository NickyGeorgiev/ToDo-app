import { Todo } from './Todo'
import { TodoInProgress } from './TodoInProgress'
import { CompletedTodo } from './CompletedTodo'
import { Link } from 'react-router-dom'
import { useEffect, useContext, useState } from 'react'
import { getTodo } from '../fetchService/getTodo'
import { ToDoContext } from '../context/ToDoContext'
import { changeStatus } from '../fetchService/changeStatus'

export const TodoList = () => {
    let [todoId, setTodoId] = useState();
    let todos = useContext(ToDoContext);

    const dragStart = (id) => {
        setTodoId(id);
    }

    const dragEnter = (data) => {
        changeStatus(todoId, data);
    }

    return (
        <div className='todo-list'>
            <div><Link to='/create'>Create new Todo</Link></div>
            <div className='todo-list-wrapper'>
                <Todo
                    dragStart={dragStart}
                    dragEnter={dragEnter}
                    data={todos ? todos.filter(x => x.status === 'start') : ''}
                />
                <TodoInProgress
                    dragStart={dragStart}
                    dragEnter={dragEnter}
                    data={todos ? todos.filter(x => x.status === 'progress') : ''}
                />
                <CompletedTodo
                    dragStart={dragStart}
                    dragEnter={dragEnter}
                    data={todos ? todos.filter(x => x.status === 'complete') : ''}
                />
            </div>
        </div>
    )
}