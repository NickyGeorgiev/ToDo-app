import { ToDo } from "./ToDo"
import { ToDoInProgress } from "./ToDoInProgress"
import { CompletedToDo } from "./CompletedToDo"

export const ToDoWrapper = () =>{
    return(
        <div className="todo-wrapper">
            <ToDo />
            <ToDoInProgress />
            <CompletedToDo />
        </div>
    )
}