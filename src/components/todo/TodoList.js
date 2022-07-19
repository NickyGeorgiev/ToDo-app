import { Todo } from './Todo'
import { TodoInProgress } from './TodoInProgress'
import { CompletedTodo } from './CompletedTodo'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import { getTodo } from '../fetchService/getTodo'

export const TodoList = () => {
    let user = useContext(ToDoContext)

        let userId
        if (user != undefined) {
            userId = user.map(x => x.objectId);
        }
        getTodo(userId);



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