import { SingleTodo } from "./SingleTodo";

export const TodoInProgress = ({ data, dragStart, dragEnter }) => {

    return (
        <div className="section-in-progress">
            <h2>In progress</h2>
            <div className="progress" draggable="true">
                {data
                    ? 
                    data.map(x => <SingleTodo 
                        key={x.objectId} 
                        info={x} 
                        dragStart={dragStart} 
                        dragEnter={dragEnter}
                    />)
                    : ''}
            </div>
        </div>
    )
}