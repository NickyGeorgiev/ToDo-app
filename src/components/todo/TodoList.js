import { Todo } from './Todo'
import { TodoInProgress } from './TodoInProgress'
import { CompletedTodo } from './CompletedTodo'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { getTodo } from '../fetchService/getTodo'

export const TodoList = ({getTodoData}) => {
    let userId = sessionStorage.getItem('userId');

    useEffect(()=>{
        if (userId !== undefined) {
            getTodo(userId, getTodoData);
        }
    },[])

    return (
        <div className='todo-list'>
            <div><Link to='/create'>Create new Todo</Link></div>
            <div className='todo-list-wrapper'>
                <Todo />
                <TodoInProgress />
                <CompletedTodo />
            </div>
        </div>
    )
}