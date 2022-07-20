import { useContext } from "react"
import { ToDoContext } from "../context/ToDoContext"
import { SingleTodo } from "./SingleTodo";

export const Todo = () =>{

    let todos = useContext(ToDoContext)

    return(
        <div className="todo">
            <h2>ToDo</h2>
            <div className="todo-section">
                {todos 
                ? todos.map(x => 
                <SingleTodo key={x.objectId} data={x} />)
                : '' }
            </div>
        </div>
    )
}