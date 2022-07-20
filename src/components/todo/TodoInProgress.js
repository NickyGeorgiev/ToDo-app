import { SingleTodo } from "./SingleTodo";

export const TodoInProgress = ({ data }) => {

    return (
        <div className="in-progress">
            <h2>In progress</h2>
            <div className="todo-section">
                {data
                    ? data.map(x => <SingleTodo key={x.objectId} info={x} />)
                    : ''}
            </div>
        </div>
    )
}