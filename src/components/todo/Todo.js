import { SingleTodo } from "./SingleTodo";

export const Todo = ({ data, dragStart, dragEnter }) => {

    return (
        <div className="section-start">
            <h2>ToDo</h2>
            <div className="start" draggable="true">
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