import { useContext } from "react"
import { ToDoContext } from "../context/ToDoContext"
import { SingleTodo } from "./SingleTodo";

export const Todo = () =>{

    let todo = useContext(ToDoContext)

    if(todo !== undefined){
        console.log(todo);
    }

    return(
        <div className="todo">
            <h2>ToDo</h2>
            <div className="todo-section">
                {todo 
                ? todo.map(x => 
                <SingleTodo key={x.objectId} data={x} />)
                : '' }
            </div>
        </div>
    )
}