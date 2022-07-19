import { Todo } from './Todo'
import { TodoInProgress } from './TodoInProgress'
import { CompletedTodo } from './CompletedTodo'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { UserDataContext } from '../context/UserDataContext'
import { getTodo } from '../fetchService/getTodo'

export const TodoList = ({getTodoData}) => {
    let user = useContext(UserDataContext);

    useEffect(()=>{
        if (user !== undefined) {
            let userId = user[0].objectId;
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