import { ToDo } from "./ToDo"
import { ToDoInProgress } from "./ToDoInProgress"
import { CompleteToDo } from "./CompleteToDo"

export const ToDoWrapper = () =>{
    return(
        <div>
            <ToDo />
            <ToDoInProgress />
            <CompleteToDo />
        </div>
    )
}