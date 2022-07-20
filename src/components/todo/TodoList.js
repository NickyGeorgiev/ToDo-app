import { Todo } from './Todo'
import { TodoInProgress } from './TodoInProgress'
import { CompletedTodo } from './CompletedTodo'
import { Link } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { getTodo } from '../fetchService/getTodo'
import { ToDoContext } from '../context/ToDoContext'

export const TodoList = ({ getTodoData }) => {
    let userId = sessionStorage.getItem('userId');
    let todos = useContext(ToDoContext);

    useEffect(() => {
        if (userId !== undefined) {
            getTodo(userId, getTodoData);
        }
    }, [])

    return (
        <div className='todo-list'>
            <div><Link to='/create'>Create new Todo</Link></div>
            <div className='todo-list-wrapper'>
                <Todo data={todos ? todos.filter(x => x.status === 'todo') : ''} />
                <TodoInProgress data={todos ? todos.filter(x => x.status === 'progress') : ''} />
                <CompletedTodo data={todos ? todos.filter(x => x.status === 'completed') : ''} />
            </div>
        </div>
    )
}