import { SingleTodo } from "./SingleTodo";

export const Todo = ({ data }) => {

    return (
        <div className="todo">
            <h2>ToDo</h2>
            <div className="section-todo">
                {data
                    ? data.map(x => <SingleTodo key={x.objectId} info={x} />)
                    : ''}
            </div>
        </div>
    )
}